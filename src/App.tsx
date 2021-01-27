import './style/main.scss'
import { Appbar, Intro, Aboutme, Projects } from './components'

function App() {
	return (
		<div className='App'>
			<Appbar />
			<Intro />
			<Aboutme />
			<Projects />
		</div>
	)
}

export default App
