import { createNewSpace } from "../services/firebase";

export const Home = () => {

	const onNewSpaceClick = () => {
		const newSpaceId = createNewSpace();
		const newSpace = `/space/${newSpaceId}`;

		window.open(newSpace);
	}

	return (
		<div>
			<h1>Real-time code sharing</h1>
			<h2>An online editor to collaborate in real-time with your peers</h2>
			<button onClick={onNewSpaceClick}>New Space</button>
		</div>
	)
}