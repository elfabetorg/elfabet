
export async function load({ fetch }) {
	// TODO: check if user is authorized
	const userID = 'value';
	const data = await fetch(`/api/getUserInfo?userid=${userID}`);
	const dataJSON = await data.json();
	console.log(dataJSON)
	return {
		stuff: dataJSON
	}
}