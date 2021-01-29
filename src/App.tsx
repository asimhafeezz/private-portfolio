import './style/main.scss'
import { Appbar, Intro, Aboutme, Projects } from './components'
import { useEffect, useState } from 'react'
import { Logo } from './components/util/Logo'

const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
	}, [])

	return isLoading ? (
		<Logo isLoading={true} />
	) : (
		<div className='App'>
			<Appbar />
			<Intro />
			<Aboutme />
			<Projects />
		</div>
	)
}

export default App
