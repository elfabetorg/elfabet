import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { ObjectId } from 'mongodb'

export async function POST({ request, cookies }) {
	const { calls } = await request.json();
	const parsedCalls = JSON.parse(calls);
	const parsedCallsWithObjectId = parsedCalls.map((obj) => {
		// Change ID from string to ObjectId
		const objDup = obj;
		delete objDup._id;
		const newObject = {
			_id: new ObjectId(obj._id),
			...objDup
		}
		return newObject;
	})
	await callsDB.collection("calls").insertMany(parsedCallsWithObjectId);
	return json({ status: 201 });
}
