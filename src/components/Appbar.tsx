import { Logo } from "../icons/Logo"
export const Appbar: React.FC = () => {
	return (
		<nav className='appbar'>
			<a href='https://asimhafeez.com'>
				<Logo isLoading={false} />
			</a>
			{/* <a href='/Asim Hafeez.pdf' rel='noopener noreferrer' target='blank'>
				<h2>Resume</h2>
			</a> */}
			<a
				href='https://medium.com/@asimhafeez'
				rel='noopener noreferrer'
				target='blank'>
				<h2>I Write</h2>
			</a>
		</nav>
	)
}
