import { Logo } from './util/Logo'

export const Appbar: React.FC = () => {
	return (
		<section className='appbar'>
			<Logo />
			<h2>Resume</h2>
		</section>
	)
}
