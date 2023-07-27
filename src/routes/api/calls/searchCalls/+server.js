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
	
	const mapDataToCleaned = (val) => {
		const capacityData = {
			capacity: val.hasMaxCapacity ? val.capacity : 'No maximum capacity',
			value: val.submissionIDs.length
		}
		return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, capacityData]
	}
	var cleanedFetchedCalls = fetchedCalls.map(mapDataToCleaned)
	
	return json(cleanedFetchedCalls);
}