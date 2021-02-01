import { CodesandBox, GithubSvg, Instagram, Linkedin, Twitter } from '../icons'
import { useScrollAnimation } from '../util/useScrollAnimation'

export const Findme: React.FC = () => {
	//use animation hook
	useScrollAnimation('.findme')
	return (
		<div className='container'>
			<div className='findme'>
				<h2>Reach Out</h2>
				<section className='contactme'>
					<p>
						My inbox is always open. Whether you have a question or just want to
						say hi, I'll try my best to get back to you!
					</p>
					<a href='mailto:asimhaff@gmail.com'>
						<button>Drop a Note</button>
					</a>
				</section>
				<section className='socials'>
					<a href='https://twitter.com/asimhyff' target='blank'>
						<Twitter />
					</a>
					<a href='https://codesandbox.io/u/asimhyff' target='blank'>
						<CodesandBox />
					</a>
					<a href='https://github.com/asimhyff' target='blank'>
						<GithubSvg />
					</a>
					<a href='https://instagram.com/asimhyff' target='blank'>
						<Instagram />
					</a>
					<a href='https://linkedin.com/in/asimhyff' target='blank'>
						<Linkedin />
					</a>
				</section>
			</div>
		</div>
	)
}
