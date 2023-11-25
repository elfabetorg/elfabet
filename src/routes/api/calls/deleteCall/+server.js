import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { ObjectId } from 'mongodb'

export async function DELETE({ url }) {
	const docID = url.searchParams.get('docID');
	const query = {
		"_id": new ObjectId(docID)
	}
	const resp = await callsDB.collection("calls").deleteOne(query);
	return json({ status: 201 });
}