import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

export async function POST({ request, cookies }) {
	const { activeCall } = await request.json();
	console.log(activeCall);
	//  Strip call of its ID
	delete activeCall._id;
	const response = await callsDB.collection("calls").insertOne(activeCall);
	activeCall._id = response["insertedId"];
	return json({ status: 201, body: { success: true, call: activeCall}  });
}
