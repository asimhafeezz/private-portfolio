import { FolderSvg, GithubSvg, LinkSvg } from '../icons'

export interface ProjectI {
	name: string
	desc: string
	languages: string
	githubLink: string
	liveLink: string
}

export const Card: React.FC<ProjectI> = props => {
	const { name, desc, languages, githubLink, liveLink } = props
	return (
		<div className='card'>
			<section className='head'>
				<h3>{name}</h3>
				<FolderSvg />
			</section>
			<section className='content'>
				<p>{desc}</p>
				<p>
					<pre>
						<code>{languages}</code>
					</pre>
				</p>
			</section>
			<section className='links'>
				{githubLink && (
					<a href={githubLink} target='blank'>
						<GithubSvg />
					</a>
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
