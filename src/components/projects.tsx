import { Card } from './card'

export const Projects: React.FC = () => {
	return (
		<div className='container'>
			<section className='projects'>
				<h2>Stuff I have built</h2>
				<section className='cards'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</section>
			</section>
		</div>
	)
}
