import { database, ref, child, push, update, onValue } from '../config/firebase';

const createNewSpace = () => {
	return push(child(ref(database), '/space/')).key;
}

const getSpaceRef = (spaceId) => {
	console.log('space id', spaceId);
	return ref(database, `/space/${spaceId}`);
}

const updateSpace = (spaceId, data) => {
	const key = `/space/${spaceId}`;

	const payload = {};
	payload[key] = data;

	update(ref(database), payload);
}

export { createNewSpace, getSpaceRef, updateSpace, onValue };