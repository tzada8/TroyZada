import React from "react";
import { FaAward, FaGraduationCap } from "react-icons/fa6";

export const educationData = [
	{
		label: "Education",
		icon: <FaGraduationCap />,
		data: [
			{
				label: "Management Sciences, PhD",
				company: "University of Waterloo",
				duration: "Sep 2024 - Present",
				details: [
					"Research interests oriented towards search engines and recommendation systems.",
				],
			},
			{
				label: "Management Engineering, BASc",
				company: "University of Waterloo",
				duration: "Sep 2019 - Jun 2024",
				details: [
					"Expertise in data analytics, information systems, and operations management.",
					"Relevant courses: Machine Learning, Search Engines, Software Engineering, and Optimization.",
					"Researched the effectiveness of LLMs in healthcare, focusing on their impact on self-diagnosis.",
				],
			},
		],
	},
	{
		label: "Awards",
		icon: <FaAward />,
		data: [
			{
				label: "Super.com Transformative Impact",
				duration: "Apr 2023, Dec 2023",
				details: [
					"Awarded twice consecutively among 60 interns for outstanding performance and delivering significant impact.",
				],
			},
			{
				label: "Gonzaga Leadership Award",
				duration: "Jun 2019",
				details: [
					"Awarded out of 500 students for being an effective, responsible, and confident problem solver within the school community.",
				],
			},
			{
				label: "Michael Kim Award",
				duration: "Jun 2019",
				details: [
					"Awarded out of 400 student-athletes for outstanding contributions and commitment to the athletic community.",
				],
			},
			{
				label: "Knights of Colombus - St. Faustina Award",
				duration: "Jun 2019",
				details: [
					"Awarded out of 500 students for consistently demonstrating an exemplary ethical attitude towards fellow students.",
				],
			},
		],
	},
];
