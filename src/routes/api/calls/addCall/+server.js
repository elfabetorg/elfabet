import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

export async function POST({ request, cookies }) {
	const { call } = await request.json();
	callsDB.collection("calls").insertOne(call);
	return json({ status: 201 });
}
