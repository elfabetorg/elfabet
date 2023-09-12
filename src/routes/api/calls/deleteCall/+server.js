import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

export async function POST({ request, cookies }) {
	const { activeCall } = await request.json();
	//  Strip call of its ID
	delete activeCall._id;
	callsDB.collection("calls").insertOne(activeCall);
	return json({ status: 201 });
}