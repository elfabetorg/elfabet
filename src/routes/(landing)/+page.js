import { user } from "$lib/authStore";
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	if (user !== null) {
		throw redirect(302, '/app');
	}
  return {};
};