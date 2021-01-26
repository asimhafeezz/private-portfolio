import { Logo } from './Logo'

export const Appbar: React.FC = () => {
	return (
		<div className='container'>
			<section className='appbar'>
				<Logo />
				<h2>Resume</h2>
			</section>
		</div>
	)
}
