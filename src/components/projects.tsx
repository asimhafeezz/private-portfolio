import { useState } from 'react'
import { projects } from '../data/projects'
import { Card } from './card'

import { useScrollAnimation } from '../util/useScrollAnimation'

export const Projects: React.FC = () => {
	const [showMore, setShowMore] = useState(false)

	const onButtonClickHandler = () => {
		setShowMore(!showMore)
	}

	//use animate hook
	useScrollAnimation('.projects')

	return (
		<div className='container'>
			<section className='projects'>
				<h2>My Work</h2>
				<section className='cards'>
					{projects.slice(0, showMore ? projects.length : 6).map((item, i) => (
						<Card key={i} {...item} />
					))}
				</section>
				<section className='button-section'>
					<button onClick={onButtonClickHandler}>
						{showMore ? 'Show Less' : 'Show More'}
					</button>
				</section>
			</section>
		</div>
	)
}
