import { Logo } from '../icons/Logo'

export const Appbar: React.FC = () => {
	return (
		<section className='appbar'>
			<a href='https://asimhafeez.com'>
				<Logo isLoading={false} />
			</a>
			<h2>Resume</h2>
		</section>
	)
}
