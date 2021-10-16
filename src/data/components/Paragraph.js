import React from "react";
import "./SubcardInfo.css";

function Paragraph(props) {
	return (
		<div>
			<p className="indent-paragraph">{props.content}</p>
			<br />
		</div>
	);
}

export default Paragraph;
