import { technologies } from "../data/technologies"
import { useScrollAnimation } from "../util/useScrollAnimation"

export const Aboutme: React.FC = () => {
	//use animate hook
	useScrollAnimation(".aboutme")

	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Hey! I’m Asim Hafeez, a Front-End Software Engineer from Pakistan.
							I am graduated from{" "}
							<span>
								<a href='https://uog.edu.pk'>University of Gujrat</a>
							</span>{" "}
							in BS Computer Science. I'm always looking for opportunities to
							work with those who are willing to share their knowledge as much
							as I want to learn. I prefer building things for the web that’s
							why I love working in javascript to build Web Application, more
							scale able, pixel-perfect and more efficient.
						</p>
						<p>
							<span>
								<b>While I'm not coding,</b>
							</span>{" "}
							I often eat, travel, or sleep...
						</p>
						<p>
							<span>
								<b>Technologies</b>
							</span>{" "}
							I'm working on,
						</p>
						<ul>
							{technologies?.map((tech, techIdx) => (
								<li key={techIdx}>{tech}</li>
							))}
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
