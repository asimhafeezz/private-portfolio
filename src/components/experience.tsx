import { SquareBulletSvg } from '../icons'
import { SingleTab, Tab } from '../util/tab'
import { useScrollAnimation } from '../util/useScrollAnimation'
export const Experience: React.FC = () => {
	//use animate hook
	useScrollAnimation('.experience')
	return (
		<div className='experience'>
			<h2>Experience</h2>
			<SingleTab>
				<Tab title='Gulzar Soft'>
					<h3>Software Engineer</h3>
					<p>Sep 2020 - Present</p>
					<section className='content-learned-items'>
						<ul>
							<li>
								<SquareBulletSvg />
								Write modern and performant code for projects
							</li>
							<li>
								<SquareBulletSvg />
								Build Web UI using React.js and with other 3rd party libraries.
							</li>
							<li>
								<SquareBulletSvg />
								Integrate RESTFUL API s on the frontend.
							</li>
							<li>
								<SquareBulletSvg />
								Work with veriety of different libraries and frameworks such as
								javascript, Reactjs, React Native, material-Ui, styled
								components.
							</li>
							<li>
								<SquareBulletSvg />
								Communitcate and collaborate with team on daily basis.
							</li>
							<li>
								<SquareBulletSvg />
								Test Apps , fixing bugs and writing optimized code.
							</li>
						</ul>
					</section>
				</Tab>
			</SingleTab>
		</div>
	)
}
