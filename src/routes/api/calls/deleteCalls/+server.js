import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

export async function DELETE({ url }) {
	const callStatus = url.searchParams.get('status') || ['active', 'inactive', 'unlisted', 'draft'];
	const query = {
		status: callStatus
	}
	await callsDB.collection("calls").deleteMany(query);
	return json({ status: 201 });
}