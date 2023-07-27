import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { get } from 'svelte/store';
import { user } from "$lib/authStore.js";

export async function GET({ url }) {
	// FIXME: implement server side auth check (to get org id and then only access calls from that org)
	const docLimit = url.searchParams.get('limit');
	const callStatus = url.searchParams.get('status');
	const query = {
		status: callStatus
	}
	const fetchedCalls = await callsDB.collection("calls").find(query).limit(Number(docLimit)).toArray();
	// Clean fetched calls for UI display
	const mapDataToCleaned = (val) => {
		const capacityData = {
			capacity: val.hasMaxCapacity ? val.capacity : 'No maximum capacity',
			value: val.submissionIDs.length
		}
		return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, capacityData]
	}
	var cleanedFetchedCalls = fetchedCalls.map(mapDataToCleaned)
	// Add stuff for capacity component
	return json(cleanedFetchedCalls);
}