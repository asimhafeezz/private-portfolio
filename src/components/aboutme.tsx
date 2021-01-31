// import rightArrowIcon from '../icons/right-arrow.png'

export const Aboutme: React.FC = () => {
	return (
		<div className='container'>
			<section className='aboutme'>
				<h2>About Me</h2>
				<section className='aboutme-grid'>
					<section className='content'>
						<p>
							Hi! I’m is Asim, a Front-End Software Engineer based in Sarai
							Alamgir. Recently,I am graduated from University of Gujrat based
							in Gujrat ,Punjab.I prefer building things for the web that’s why
							I love working in javascript to build Web Application , more scale
							able and more efficient.
						</p>
						<p>Technologies i am working on,</p>
						<ul>
							<li>
								<>Javascript (ES6+)</>
							</li>
							<li>
								<>React Native</>
							</li>
							<li>
								<>Html (S)CSS</>
							</li>
							<li>
								<>Typescript</>
							</li>
							<li>
								<>React js</>
							</li>
							<li>
								<>Node js</>
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
