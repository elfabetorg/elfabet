import { usersDB } from '$lib/mongoDB.server.js';

export const POST = async ({ request, cookies }) => {
	const { userID, userType } = await request.json();
	const userData = {
		_id: userID,
		type: userType
	};
	const result = await usersDB.collection('users').insertOne(userData);
};