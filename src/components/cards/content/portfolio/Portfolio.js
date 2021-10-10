import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import ProjectCard from "./project_card/ProjectCard";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import { portfolioCodingData, portfolioComData } from "./PortfolioData";

function Portfolio() {
	function displayProjectData(data) {
		return (
			<ul>
				{Object.keys(data).map((key) => {
					return (
						<ProjectCard
							path={data[key].path}
							projectTitle={data[key].title}
							src={data[key].image}
							text={data[key].briefDescription}
						/>
					);
				})}
			</ul>
		);
	}

	const codingProjectCardsDisplay = displayProjectData(portfolioCodingData);
	const comProjectCardsDisplay = displayProjectData(portfolioComData);

	return (
		<div>
			<Subtitle icon="fas fa-code" label="Coding Projects" />
			{codingProjectCardsDisplay}

			<GroupsDivider />

			<Subtitle icon="fas fa-comments" label="Communication Projects" />
			{comProjectCardsDisplay}
		</div>
	);
}

export default Portfolio;
