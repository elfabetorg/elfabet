import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { ObjectId } from 'mongodb'

export async function DELETE({ url }) {
	const docID = url.searchParams.get('docID');
	const filter = {
		"_id": new ObjectId(docID)
	}
	const resp = await callsDB.collection("calls").deleteOne(filter);
	return json({ status: 201 });
}