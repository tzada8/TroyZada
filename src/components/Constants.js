import Home from "./cards/home/Home";
import Portfolio from "./cards/content/portfolio/Portfolio";
import Skills from "./cards/content/skills/Skills";
import Experience from "./cards/content/experience/Experience";
import Blog from "./cards/content/blog/Blog";
import Contact from "./cards/content/contact/Contact";
import PageNotFound from "./cards/content/page_not_found/PageNotFound";

export const pageNotFound = {
	label: "PAGE NOT FOUND",
	component: <PageNotFound />,
	quotation: "Understanding a question is half the answer",
	author: "Socrates",
};

export const navbarCategories = {
	home: {
		label: "HOME",
		path: "/",
		component: <Home />,
	},
	experience: {
		label: "EXPERIENCE",
		path: "/experience",
		component: <Experience />,
		quotation: "The only source of knowledge is experience",
		author: "Albert Einstein",
	},
	skills: {
		label: "SKILLS",
		path: "/skills",
		component: <Skills />,
		quotation:
			"Tell me and I forget, teach me and I may remember, involve me and I learn",
		author: "Benjamin Franklin",
	},
	portfolio: {
		label: "PORTFOLIO",
		path: "/portfolio",
		component: <Portfolio />,
		quotation:
			"As practice makes perfect, I cannot but make progress; each drawing one makes, each study one paints, is a step forward",
		author: "Vincent Van Gogh",
	},
	blog: {
		label: "BLOG",
		path: "/blog",
		component: <Blog />,
		quotation:
			"The reading of all good books is like a conversation with the finest minds of past centuries",
		author: "Rene Descartes",
	},
	contact: {
		label: "CONTACT",
		path: "/contact",
		component: <Contact />,
		quotation:
			"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience",
		author: "Eleanor Roosevelt",
	},
};

// SOCIAL MEDIA LINKS / CONTACT
export const LINKEDIN_LINK = "https://www.linkedin.com/in/troy-zada";
export const FACEBOOK_LINK = "https://www.facebook.com/troy.m.zada";
export const EMAIL = "tzada8@gmail.com";

// NAME
export const FIRST_NAME = "Troy";
export const LAST_NAME = "Zada";
export const FULL_NAME = FIRST_NAME + " " + LAST_NAME;
