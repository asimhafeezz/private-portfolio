import { useAnimation } from '../util/useAnimation'

export const Aboutme: React.FC = () => {
	//use animate hook
	useAnimation('.aboutme')

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
								<b>While I'm not coding,</b>
							</span>{' '}
							I often eat, travel, or sleep...
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
