import { user } from "$lib/authStore";
import { get } from 'svelte/store'
import { redirect } from '@sveltejs/kit';

// TODO: redirect to /app if user is signed in.

export const load = async () => {
	if (get(user) === null) {
		throw redirect(302, '/app');
	}
  return {};
};