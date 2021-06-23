import { experience } from "../data/expirenece"
import { SquareBulletSvg } from "../icons"
import { Tab, Tabs } from "../util/tab"
import { useScrollAnimation } from "../util/useScrollAnimation"
export const Experience: React.FC = () => {
	//use animate hook
	useScrollAnimation(".experience")

	return (
		<div className='experience'>
			<h2>Experience</h2>
			<Tabs>
				{experience?.map(({ title, content }, expIdx) => (
					<Tab title={title} key={expIdx}>
						<h3>
							{content.workingAsA}
							{content?.website && (
								<span>
									<a href={content?.website} target='blank'>
										@{title}
									</a>
								</span>
							)}
						</h3>

						<p>{content.workDuration}</p>
						<section className='content-learned-items'>
							<ul>
								{content.learned.map((learn, learnIdx) => (
									<li key={learnIdx}>
										<SquareBulletSvg />
										{learn}
									</li>
								))}
							</ul>
						</section>
					</Tab>
				))}
			</Tabs>
		</div>
	)
}
