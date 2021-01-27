import openFolderIconURL from '../icons/open-folder.png'
import githubIconURL from '../icons/github.png'
import linkIconURL from '../icons/link.png'

export const Card: React.FC = () => {
	return (
		<div className='card'>
			<section className='head'>
				<h3>Car Rental System</h3>
				<img src={openFolderIconURL} alt='open-folder' />
			</section>
			<section className='content'>
				<p>
					A single page App built with Reactjs , nodejs , flask, chart js,
					Material-UI and with other third party Api’s by using Microservices
					Architecture.
				</p>
				<p>Flask , Reactjs, Node.js</p>
			</section>
			<section className='links'>
				<img src={githubIconURL} alt='github-icon' />
				<img src={linkIconURL} alt='link-icon' />
			</section>
		</div>
	)
}
