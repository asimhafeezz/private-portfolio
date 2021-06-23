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
		title: "Vappar",
		content: {
			workingAsA: "Frontend Engineer",
			workDuration: "Mar 2021 -  Present",
			website: "https://vappar.com/",
			learned: [
				"Design Architecture for Frontend Web Applications with team.",
				"Works on IoT Product Frontend Development",
				"Collaborate and Communitcate with Designing & Backend teams daily",
				"Develop Web App’s UI using React.js and with other 3rd party libraries.",
				"Integrate GraphQL & REST API’s on the frontend.",
				"Write reuseable components using modern and performant code for projects",
				"Works with veriety of different libraries i.e Reactjs, material-UI, styled components.",
			],
		},
	},
	{
		title: "Gulzar Soft",
		content: {
			workingAsA: "UI Engineer",
			workDuration: "Sep 2020 -  Mar 2021",
			learned: [
				"Write modern and performant code for projects",
				"Build Web UI using React.js and with other 3rd party libraries.",
				"Integrate RESTFUL API s on the frontend.",
				"Work with veriety of different libraries and frameworks such as javascript, Reactjs, React Native, material-Ui, styled components.",
				"Communitcate and collaborate with team on daily basis.",
				"Build Client Side Mobile Apps using React Native.",
				"Test Apps , fixing bugs and writing optimized code.",
			],
		},
	},
]
