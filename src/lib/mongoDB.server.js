import { MongoClient } from "mongodb"
import { DB_URI } from '$env/static/private';

// console.log(DB_URI);

const client = new MongoClient(DB_URI);
await client.connect();

export const usersDB = client.db('user_data');
export const callsDB = client.db('calls_data')