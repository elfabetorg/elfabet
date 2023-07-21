import { json } from '@sveltejs/kit';
import { callsDB } from "$lib/mongoDB.server.js";
import { get } from 'svelte/store';
import { user } from "$lib/authStore.js";

export async function GET({ url }) {
	// TODO: check if the user is properly authenticated on the server
	const docLimit = url.searchParams.get('limit');
	const callStatus = url.searchParams.get('status');
	const query = {
		status: callStatus
	}
	const fetchedCalls = await callsDB.collection("calls").find(query).limit(Number(docLimit)).toArray();
	// Clean fetched calls for UI display
	var cleanedFetchedCalls = fetchedCalls.map((val) => { return [val.title, val.endsOn.type === 'Date' ? new Date(val.endsOn.date).toDateString() : val.endsOn.type, val.hasMaxCapacity ? `${val.capacity}` : 'No maximum capacity'] })
	if (cleanedFetchedCalls.length === 0) {
		// No calls found
		cleanedFetchedCalls = [["Nothing here yet!", ":)", "Try adding a call"]]
	}
	console.log(cleanedFetchedCalls)
	return json(cleanedFetchedCalls);
}