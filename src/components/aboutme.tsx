import rightArrowIcon from '../icons/right-arrow.png'

export const Aboutme: React.FC = () => {
	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Hi! I’m is Asim, a Front-End Software Engineer based in Sarai
							Alamgir.
						</p>
						<p>
							Recently,I am graduated from University of Gujrat based in Gujrat
							,Punjab.I prefer building things for the web that’s why I love
							working in javascript to build Web Application , more scale able
							and more efficient.
						</p>
						<p>Technologies i am working on,</p>
						<ul>
							<li>
								<b>Javascript (ES6+)</b>
							</li>
							<li>
								<b>Html (S)CSS</b>
							</li>
							<li>
								<b>Typescript</b>
							</li>
							<li>
								<b>React Native</b>
							</li>
							<li>
								<b>React js</b>
							</li>
							<li>
								<b>Node js</b>
							</li>
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
