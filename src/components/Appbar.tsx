import { Logo } from '../icons/Logo'
export const Appbar: React.FC = () => {
	return (
		<nav className='appbar'>
			<a href='https://asimhafeez.com'>
				<Logo isLoading={false} />
			</a>
			<a href='/AsimHafeez.pdf' rel='noopener noreferrer' target='_blank'>
				<h2>Resume</h2>
			</a>
		</nav>
	)
}
