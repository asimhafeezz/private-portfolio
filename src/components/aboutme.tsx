import { gsap } from 'gsap'
import { useEffect } from 'react'

export const Aboutme: React.FC = () => {
	useEffect(() => {
		gsap.from('.aboutme', {
			opacity: 0,
			duration: 3,
			scrollTrigger: {
				trigger: '.aboutme',
				start: 'top 80%',
				once: true,
			},
		})
	}, [])
	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Hi! I’m is Asim Hafeez, a Software Engineer from Pakistan. I am
							graduated from{' '}
							<span>
								<a href='https://uog.edu.pk'>University of Gujrat</a>
							</span>{' '}
							in BS Computer Science. I'm always looking for opportunities to
							work with those who are willing to share their knowledge as much
							as I want to learn. I prefer building things for the web that’s
							why I love working in javascript to build Web Application, more
							scale able, pixel-perfect and more efficient.
						</p>
						<p>
							<span>
								<b>While not coding,</b>
							</span>{' '}
							I'm probably eating, traveling, or sleeping...
						</p>
						<p>
							<span>
								<b>Technologies</b>
							</span>{' '}
							i am working on,
						</p>
						<ul>
							<li>Javascript (ES6+)</li>
							<li>React Native</li>
							<li>Html (S)CSS</li>
							<li>Typescript</li>
							<li>React js</li>
							<li>Node js</li>
						</ul>
					</section>
					<section className='image'>
						<img src='/asim.jpg' alt='personal-pic' />
					</section>
				</section>
			</section>
		</div>
	)
}
