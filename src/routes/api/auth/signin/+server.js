import { adminAuth } from '$lib/server/admin'; // TODO: actually make this file!
import { error, json } from '@sveltejs/kit';

export const POST = async ({ request, cookies }) => {
	const { idToken } = await request.json();

	const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

	const decodedIdToken = await adminAuth.verifyIdToken(idToken);

	const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
	const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };
	cookies.set('__session', cookie, options);
	return json({ status: 'signedIn' });
};

export const DELETE = async ({ cookies }) => {
	cookies.delete('__session', { path: '/' });
	return json({ status: 'signedOut' });
}