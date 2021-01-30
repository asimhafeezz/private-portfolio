import './style/main.scss'
import {
	Appbar,
	Intro,
	Aboutme,
	Projects,
	WhileNotCoding,
	Footer,
} from './components'
import { useEffect, useState } from 'react'
import { Logo } from './icons/Logo'

const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3150)
	}, [])

	return isLoading ? (
		<Logo isLoading={true} />
	) : (
		<div className='App'>
			<Appbar />
			<Intro />
			<Aboutme />
			<Projects />
			<WhileNotCoding />
			<Footer />
		</div>
	)
}

export default App
