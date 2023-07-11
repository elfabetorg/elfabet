import { usersDB } from "$lib/mongoDB.server.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  // TODO: fix this
  const userID = url.searchParams.get('userid');
  const userInfo = await usersDB.collection('users').findOne({ userid: userID });
  const userInfo_json = json(userInfo);
  return new json(userInfo);
}