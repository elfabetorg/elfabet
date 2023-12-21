import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";

const mapDataToCleaned = (val) => {
	const capacityData = {
		capacity: val.hasMaxCapacity ? val.capacity : 'No maximum capacity',
		value: val.submissionIDs.length
	}
	return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, capacityData]
}

export async function GET({ url }) {
	// FIXME: implement server side auth check (to get org id and then only access calls from that org) 
	const searchText = url.searchParams.get('searchText') || '';
	const docLimit = url.searchParams.get('limit') || 200;
	const callStatus = url.searchParams.get('status') || ['active', 'inactive', 'unlisted', 'draft'];
	const getRaw = url.searchParams.get('getRaw') || false;
	const orgID = url.searchParams.get('orgID');
	let pipeline = [];

	// console.log(`searchText: ${searchText}`);
	// console.log(`docLimit: ${docLimit}`);
	// console.log(`callStatus: ${callStatus}`);

	if (searchText === '') {
		pipeline = [{
			$match: {
				orgID: orgID,
				status: callStatus
			}
		}]
	} else {
		pipeline = [
			{
				$search: {
					"autocomplete": {
						"query": searchText,
						"path": "title",
						"tokenOrder": "sequential",
						"fuzzy": {
							maxEdits: 2
						}
					},
				}
			},
			{
				$match: {
					orgID: orgID,
					status: callStatus,
				}
			}]
	}
	
	const fetchedCalls = await callsDB.collection("calls").aggregate(pipeline).limit(Number(docLimit)).toArray();
	
	if (getRaw) {
		return json(fetchedCalls);
	} else {
		// Clean fetched calls for UI display if necessary
		var cleanedFetchedCalls = fetchedCalls.map(mapDataToCleaned)
		// Add stuff for capacity component
		return json(cleanedFetchedCalls);
	}
}