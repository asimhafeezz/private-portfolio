interface experienceI {
	title: string
	content: {
		workingAsA: string
		workDuration: string
		website?: string
		learned: string[]
	}
}

export const experience: experienceI[] = [
	{
		title: "Sofit",
		content: {
			workingAsA: "Frontend Engineer",
			workDuration: "Nov 2021 -  Present",
			website: "https://sofit.ltd/",
			learned: [
				"Optimize Web Applications for maximum speed and scalability.",
				"Use HTML, CSS, javascripts and it's libraries/frameworks like React, bootstrap and material-UI and other 3rd Party libraries etc to build Web Apps UI.",
				"Collaborate and communicate with other teams to work on projects which require both type of skills.",
				"Integrate REST APIs on the frontend.",
				"Help and Guide teammates with their knowledge and problems.",
				"Write reusable components using modern and performant code for projects.",
			],
		},
	},
	{
		title: "Vappar",
		content: {
			workingAsA: "Frontend Engineer",
			workDuration: "Mar 2021 -  Oct 2021",
			website: "https://vappar.com/",
			learned: [
				"Designed Architecture for Frontend Web Applications with team.",
				"Worked on IoT Product Frontend Development.",
				"Collaborated and Communicated with Designing & Backend teams daily.",
				"Developed Web App’s UI using React.js and with other 3rd party libraries.",
				"Integrated GraphQL & REST APIs on the frontend.",
				"Wrote reusable components using modern and performant code for projects",
				"Worked with variety of different libraries i.e., Reacts, material-UI, styled components.",
			],
		},
	},
	{
		title: "Gulzar Soft",
		content: {
			workingAsA: "UI Engineer",
			workDuration: "Sep 2020 -  Mar 2021",
			learned: [
				"Wrote modern and performant code for projects.",
				"Built Web Apps using React.js and with other 3rd party libraries.",
				"Integrated RESTFUL API s on the frontend.",
				"Worked with veriety of different libraries and frameworks such as javascript, Reactjs, React Native, material-Ui, styled components.",
				"Communitcated and collaborated with team on daily basis.",
				"Built Client Side Mobile Apps using React Native.",
				"Tested Apps , fixing bugs and writing optimized code.",
			],
		},
	},
]
