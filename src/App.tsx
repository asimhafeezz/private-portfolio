import './style/main.scss'
import { Appbar, Intro, Aboutme, Projects, Footer, Findme } from './components'
import { useEffect, useState } from 'react'
import { Logo } from './icons/Logo'

//animation trigger gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
		<div className='App'>
			<Appbar />
			<Intro />
			<Aboutme />
			<Projects />
			<Findme />
			<Footer />
		</div>
	)
}

export default App
