/**
 * Convert a local datetime string to MongoDB compatible UTC format
 * 
 * @param {string} localDateTime - A datetime string in "YYYY-MM-DDTHH:MM" format
 * @returns {string} - A datetime string in "YYYY-MM-DDTHH:MM:00.000Z" format
 */
 export function getUTCDateForMongoDB(localDateTime) {
	return localDateTime + ":00.000Z";
}

/**
 * Converts an ISO date string to a more readable format.
 * 
 * @param {string} dateString - The ISO date string.
 * @returns {string} A readable date-time string.
 */
 export function mongoDateToReadableFormat(dateString) {
	const date = new Date(dateString);
	return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}