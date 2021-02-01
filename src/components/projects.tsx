import { useState, useEffect } from 'react'
import { projects } from '../data/projects'
import { Card } from './card'

import { gsap } from 'gsap'

export const Projects: React.FC = () => {
	const [showMore, setShowMore] = useState(false)

	const onButtonClickHandler = () => {
		setShowMore(!showMore)
	}

	useEffect(() => {
		gsap.from('.projects', {
			opacity: 0,
			duration: 3,
			scrollTrigger: {
				trigger: '.projects',
				start: 'top 80%',
				once: true,
			},
		})
	}, [])

	return (
		<div className='container'>
			<section className='projects'>
				<h2>Stuff I have built</h2>
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
