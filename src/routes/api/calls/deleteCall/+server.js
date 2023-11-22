import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { ObjectId } from 'mongodb'

export async function DELETE({ url }) {
	const docID = url.searchParams.get('docID') || '';
	const callStatus = url.searchParams.get('status') || ['active', 'inactive', 'unlisted', 'draft'];
	if (docID !== '') {
		const query = {
			"_id": new ObjectId(docID)
		}
		await callsDB.collection("calls").deleteOne(query);
	} else {
		const query = {
			status: callStatus
		}
		await callsDB.collection("calls").deleteMany(query);
	}
	
	return json({ status: 201 });
}