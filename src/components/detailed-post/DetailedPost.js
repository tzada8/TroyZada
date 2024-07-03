import React from "react";
import { Link } from "react-router-dom";

import HorizontalBar from "../horizontal-bar/HorizontalBar";
import PostImage from "../post-image/PostImage";
import RoutingButton from "../button/RoutingButton";
import "./DetailedPost.css";

export default function DetailedPost(props) {
	const isClickable = props.path ? true : false;

    const detailsIcon = isClickable
        ? <RoutingButton path={props.path} icon="fas fa-angle-right" />
        : props.github
		? <RoutingButton path={props.github} icon="fab fa-github" />
		: <></>;

    const content = (
        <div>
			<PostImage clickable={isClickable} src={props.src} alt={props.label} />
			<div className="post-description-box">
				<h3 className="post-title">{props.label}</h3>
				<h4 className="post-details">{props.details}</h4>
				<div className="post-icon">{detailsIcon}</div>
			</div>
		</div>
    );

	return (
		<div className="post-container">
			{isClickable ? <Link to={props.path} className="post-content">{content}</Link> : content}
			<HorizontalBar thick />
		</div>
	);
}