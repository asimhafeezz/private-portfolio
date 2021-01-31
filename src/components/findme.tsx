import { CodesandBox, GithubSvg, Instagram, Linkedin, Twitter } from '../icons'

export const Findme: React.FC = () => {
	return (
		<div className='container'>
			<div className='findme'>
				<h2>Get In Touch</h2>
				<section className='contactme'>
					<p>
						my inbox is always open. Whether you have a question or just want to
						say hi, I'll try my best to get back to you!
					</p>
					<button>Drop a Note</button>
				</section>
				<section className='socials'>
					<Twitter />
					<CodesandBox />
					<GithubSvg />
					<Instagram />
					<Linkedin />
				</section>
			</div>
		</div>
	)
}
