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
		title: "Roxova",
		content: {
			workingAsA: "Senior Software Engineer",
			workDuration: "Dec 2022 -  Present",
			website: "https://www.roxova.com/",
			learned: [
				"Architecting robust backend services that meet the most demanding requirements.",
				"Building CI/CD pipelines on Heroku for web applications and services, ensuring fast and reliable deployments.",
				"Leveraging my expertise, I have successfully implemented efficient and reliable strategies for uploading large files to AWS S3 in chunks, ensuring optimal performance",
				"Designing efficient and scalable database schemas for NoSQL databases such as DynamoDB, ensuring reliable and high-performance data management.",
			],
		},
	},
	{
		title: "Sofit",
		content: {
			workingAsA: "Web Software Engineer",
			workDuration: "Oct 2021 -  Jan 2023",
			website: "https://sofit.ltd/",
			learned: [
				"I work here to build more efficient and scalable Web Systems. Currently, I am in a lead-team of an internal product to implement Micro-Frontend Architecture to build frontend services using technologies like React, Module Federation, Webpack, Ant-Design, and other 3rd Party libraries. Node.js for building RESTful Web Services. Containerizing Applications using Docker and helping the team to deploy. Collaborate and communicate with other teams to work on projects requiring both skills. Help and Guide teammates with their knowledge and problems. Write reusable modern and performant code for projects",
			],
		},
	},
	{
		title: "Vappar",
		content: {
			workingAsA: "Software Engineer",
			workDuration: "Sep 2020 -  Oct 2021",
			website: "https://vappar.com/",
			learned: [
				"I am here to write modern and performant code to build Web App using React.js and with other 3rd party libraries, integrating GraphQL & REST APIs on the frontend by collaborating and communicating with designing and backend teams on daily basis. Mostly, I work with a variety of different libraries such as React.js, material UI, and styled components",
			],
		},
	},
	{
		title: "Blue Raven Inc.",
		content: {
			workingAsA: "Full Stack Engineer",
			workDuration: "Mar 2019 -  Aug 2020",
			website: "http://blueraveninc.com/",
			learned: [
				"Learned better designing of APIs using Node.js.",
				"Collaborated with engineering and design teams to integrate external APIs into web pages and applications.",
				"Evaluated and improved existing systems under mentor supervision.",
			],
		},
	},
	{
		title: "Gulzar Soft",
		content: {
			workingAsA: "Javascript Developer",
			workDuration: "Sep 2018 -  Feb 2019",
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
