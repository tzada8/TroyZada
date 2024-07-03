import React from "react";

import GroupedList from "../../../components/text-details/GroupedList";
import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function Pathfinding() {
	return (
		<div>
			<Subheading label="About the Application" />
			<Paragraph content="Determining the shortest distance between two points is a crucial aspect in day to day life. This application does exactly that. It determines the shortest distance between two points in any given obstacle using different approaches." />
			<Paragraph content="With this Pathfinding Algorithms application, users can draw unique obstacles or choose one of the preset ones, and the shortest path between the start point and endpoint will be determined. " />
			<Paragraph content="The user also has the option to watch the solution unfold or to choose between algorithms such that they may see the differences between how each algorithm works. " />

			<Subheading label="Tech Stack" />
			<GroupedList header="Frontend" bullets={[
				{label: "Java Swing", content: "GUI for visual elements"},
			]}/>

			<GroupedList header="Backend" bullets={[
				{label: "Java", content: "Language for the algorithms, obstacles, and features"},
			]}/>

			<GroupedList header="Algorithms" bullets={[
				{label: "Breadth-First Search", content: "Checks the board by viewing the tiles closest to the start tile, then spreading out"},
				{label: "Depth-First Search", content: "Fully attempts one path until a dead end is reached, then attempts another"},
				{label: "A*", content: "Calculates a G, H and F cost for the current tile, being the distances between the start/end tile and the current tile"},
				{label: "Dijkstra", content: "Checks tiles that are closest to the start tile"},
			]}/>

			<Subheading label="Application's Functionality" />
			<Paragraph content="A settings component of the entire application allows the user to start the pathfinding, reset the board, see the steps of the solution, choose between different algorithms, and choose between different obstacles. " />
			<Paragraph content="If a different obstacle is chosen, then the board resets, and the new obstacle is drawn instead. If a different algorithm is chosen, then the application remembers this algorithm for when the pathfinding begins. " />
			<Paragraph content="Once an algorithm and obstacle are chosen, the user can then choose to see the steps or just view the solution. Seeing the steps will render red and green tiles to depict how the algorithm runs and which tiles it checks. " />
		</div>
	);
}