import { useState } from 'react'

interface LogoPropsI {
	isLoading: boolean
}

export const Logo: React.FC<LogoPropsI> = ({ isLoading }) => {
	return (
		<div className={isLoading ? 'center' : ''}>
			<div className={isLoading ? 'logo-wrapper' : 'logo-not-loading-wrapper'}>
				<svg
					width={!isLoading ? '35' : '55'}
					height={!isLoading ? '45' : '65'}
					viewBox='0 0 92 50'
					fill='none'
					className='logo-paths'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M32.915 38.4131H13.6377L9.60449 50H0.615234L19.4141 0.234375H27.1729L46.0059 50H36.9824L32.915 38.4131ZM16.0645 31.4404H30.4883L23.2764 10.7959L16.0645 31.4404Z'
						fill='black'
					/>
					<path
						d='M91.1914 50H82.5781V27.8857H60.3271V50H51.6797V0.234375H60.3271V20.9473H82.5781V0.234375H91.1914V50Z'
						fill='black'
					/>
				</svg>
			</div>
		</div>
	)
}
