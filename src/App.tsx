import { useEffect, useState } from 'react'
import './style/main.scss'
import {
	Appbar,
	Intro,
	Aboutme,
	Projects,
	Footer,
	Findme,
	Experience,
} from './components'
import { Logo } from './icons'
import { Layout } from './common/layout'

const App = () => {
	//local state
	const [isLoading, setIsLoading] = useState<boolean>(true)

	//showing off logo after some seconds
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3150)
	}, [])

	return isLoading ? (
		<Logo isLoading={true} />
	) : (
		<Layout>
			<Appbar />
			<Intro />
			<Aboutme />
			<Experience />
			<Projects />
			<Findme />
			<Footer />
		</Layout>
	)
}

export default App
