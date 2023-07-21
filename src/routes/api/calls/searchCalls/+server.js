import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

export async function GET({ url }) {
	const searchText = url.searchParams.get('searchText');
	const docLimit = url.searchParams.get('limit');
	const callStatus = url.searchParams.get('status');
	const query = {
		'title': {
			$regex: new RegExp(searchText, 'i')
		},
		status: callStatus
	}
	const fetchedCalls = await callsDB.collection("calls").find(query).limit(Number(docLimit)).toArray();
	// Clean fetched calls for UI display
	var cleanedFetchedCalls = fetchedCalls.map((val) => { return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, val.hasMaxCapacity ? `${val.capacity}` : 'No maximum capacity'] })
	if (cleanedFetchedCalls.length === 0) {
		// No calls found
		cleanedFetchedCalls = [["We couldn't find anything matching that description", ":(", "Sorry"]]
	}
	return json(cleanedFetchedCalls);
}