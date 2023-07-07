import { user } from "$lib/authStore";
import { get } from 'svelte/store'
import { redirect } from '@sveltejs/kit';

// TODO: redirect to /app if user is signed in.
// TODO: determine if user is writer or editor acc

export const load = async () => {
	const authState = get(user);
	console.log(authState);
	console.log(user);
	if (authState !== null) {
		throw redirect(302, '/app/editor');
	}
  return {};
};