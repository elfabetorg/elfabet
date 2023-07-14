import { usersDB } from "$lib/mongoDB.server.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  // TODO: fix this
  const userID = url.searchParams.get('userid');
  const users = usersDB.collection('users');
  const orgs = usersDB.collection('orgs');
  const userInfo = await users.findOne({ _id: userID });
  const userOrg = await orgs.findOne({ _id: userInfo.org_id })
  userInfo.org = userOrg; // add org info object to userInfo
  return new json(userInfo);
}