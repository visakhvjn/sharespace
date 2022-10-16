import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpaceRef, updateSpace, onValue } from "../../services/firebase";
import "./index.css";

export const Editor = () => {

	const [content, setContent] = useState("");
	const [spaceId, setSpaceId] = useState(null);
	const [spaceRef, setSpaceRef] = useState();
	const params = useParams();

	const onContentChange = (e) => {

		if (e.target.value !== content) {
			updateSpace(spaceId, e.target.value);
		}
	}

	useEffect(() => {
		const spaceId = params.spaceId;
		setSpaceId(spaceId);
		setSpaceRef(getSpaceRef(spaceId));
	}, [params.spaceId]);

	if (spaceRef) {
		onValue(spaceRef, (snapshot) => {
			const newContent = snapshot.val();

			if (content !== newContent) {
				setContent(newContent);
			}
		});
	}


	return (
		<div>
			<textarea className="editorContent" rows={50} cols={100} onChange={onContentChange} value={content} />
			<div>SpaceID: {spaceId}</div>
		</div>
	)
}