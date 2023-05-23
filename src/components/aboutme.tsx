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
							Hey! I’m Asim Hafeez, a Software Engineer having expertise in
							building Web Applications and services using different
							architectures like Monolithic, SOA, and microservices. My
							extensive knowledge of blockchain technology includes
							certifications and proficiency in developing and deploying smart
							contracts on Ethereum Blockchain using Solidity, Hardhat/Truffle,
							Chainlink, and Alchemy. I also build CI/CD pipelines using AWS
							services and serverless backend architecture using AWS services
							such as S3, API Gateway, DynamoDB and Lambda has allowed me to
							design and develop highly scalable and reliable web applications
							that can be easily deployed and maintained using the AWS cloud
							infrastructure.
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
