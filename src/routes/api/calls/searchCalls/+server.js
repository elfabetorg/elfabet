import { json } from '@sveltejs/kit'
import { callsDB } from "$lib/mongoDB.server.js";

export async function GET({ url }) {
	const searchText = url.searchParams.get('searchText');
	const docLimit = url.searchParams.get('limit');
	const callStatus = url.searchParams.get('status');

	var fetchedCalls;

	// TODO: fix this and make search work properly (with special characters)
	try {
		new RegExp(searchText, 'i');
		const query = {
			'title': {
				$regex: new RegExp(searchText, 'i')
			},
			status: callStatus
		}
		fetchedCalls = await callsDB.collection("calls").find(query).limit(Number(docLimit)).toArray();
	} catch {
		// If RegEx not valid, just don't perform the query
		fetchedCalls = await callsDB.collection("calls").find().limit(Number(docLimit)).toArray();
	}
	
	// Clean fetched calls for UI display
	var cleanedFetchedCalls = fetchedCalls.map((val) => { return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, val.hasMaxCapacity ? `${val.capacity}` : 'No maximum capacity'] })
	if (cleanedFetchedCalls.length === 0) {
		// No calls found
		cleanedFetchedCalls = [["We couldn't find anything matching that description", ":(", "Sorry"]]
	}
	return json(cleanedFetchedCalls);
}