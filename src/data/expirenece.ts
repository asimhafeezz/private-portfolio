interface experienceI {
	title: string
	content: {
		workingAsA: string
		workDuration: string
		learned: string[]
	}
}

export const experience: experienceI[] = [
	{
		title: 'Gulzar Soft',
		content: {
			workingAsA: 'Software Engineer',
			workDuration: 'Sep 2020 -  Present',
			learned: [
				'Write modern and performant code for projects',
				'Build Web UI using React.js and with other 3rd party libraries.',
				'Integrate RESTFUL API s on the frontend.',
				'Work with veriety of different libraries and frameworks such as javascript, Reactjs, React Native, material-Ui, styled components.',
				'Communitcate and collaborate with team on daily basis.',
				'Build Client Side Mobile Apps using React Native.',
				'Test Apps , fixing bugs and writing optimized code.',
			],
		},
	},
]
