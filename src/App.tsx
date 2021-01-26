import './style/main.scss'
import { Appbar, Intro, Aboutme } from './components'

function App() {
	return (
		<div className='App'>
			<Appbar />
			<Intro />
			<Aboutme />
		</div>
	)
}

export default App
