
export async function load({ fetch }) {
	// TODO: check if user is authorized
	const data = await fetch('/api/users');
	const dataJSON = await data.json();
	return {
		stuff: dataJSON
	}
}