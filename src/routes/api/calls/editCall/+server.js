import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { ObjectId } from 'mongodb';

export async function PATCH({ request, cookies }) {
	const { call, changedProperties } = await request.json();
	const result = await callsDB.collection("calls").updateOne(
		{ _id: new ObjectId(call._id)  }, 
		{ $set: changedProperties }
	);
	if (result.modifiedCount === 1) {
		const updatedCall = await callsDB.collection("calls").findOne({ _id: new ObjectId(call._id) });
		return new Response(JSON.stringify({ 
			status: 200, 
			headers: {
				'Content-Type': 'application/json'
			},
			body: { success: true, modifiedCall: updatedCall} 
		}));
	} else {
		return new Response(JSON.stringify({ 
			status: 400, 
			headers: {
					'Content-Type': 'application/json'
			},
			body: { success: false, error: 'Failed to update call' } 
		}));
	}
}
