import { Logo } from '../icons/Logo'

export const Appbar: React.FC = () => {
	return (
		<section className='appbar'>
			<Logo isLoading={false} />
			<h2>Resume</h2>
		</section>
	)
}
