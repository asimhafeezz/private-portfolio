import { useEffect } from 'react'
import { FolderSvg, GithubSvg, LinkSvg } from '../icons'
import gsap from 'gsap'
export interface ProjectI {
	name: string
	desc: string
	languages: string
	githubLink: string
	liveLink: string
}

export const Card: React.FC<ProjectI> = props => {
	const { name, desc, languages, githubLink, liveLink } = props

	useEffect(() => {
		const unsub = () => {
			gsap.to('.card', {
				opacity: 1,
				duration: 1.5,
			})
		}
		return unsub()
	}, [])

	return (
		<div className='card'>
			<section className='head'>
				<h3>{name}</h3>
				<FolderSvg />
			</section>
			<section className='content'>
				<p>{desc}</p>
				<pre>
					<code>{languages}</code>
				</pre>
			</section>
			<section className='links'>
				{githubLink ? (
					<a href={githubLink} target='blank'>
						<GithubSvg />
					</a>
				) : (
					<div />
				)}
				{liveLink && (
					<a href={liveLink} target='blank'>
						<LinkSvg />
					</a>
				)}
			</section>
		</div>
	)
}
