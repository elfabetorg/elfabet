import { usersDB } from "$lib/mongoDB.server.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  
  const users = await usersDB.collection('users').find().toArray();
  return new json(users);
}