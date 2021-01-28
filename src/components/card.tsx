import githubIconURL from '../icons/github.png'
import linkIconURL from '../icons/link.png'
import { FolderSvg } from '../icons/folder'
import { GithubSvg } from '../icons/github'
import { LinkSvg } from '../icons/link'

export const Card: React.FC = () => {
	return (
		<div className='card'>
			<section className='head'>
				<h3>Car Rental System</h3>
				<FolderSvg />
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
				<GithubSvg />
				<LinkSvg />
			</section>
		</div>
	)
}
