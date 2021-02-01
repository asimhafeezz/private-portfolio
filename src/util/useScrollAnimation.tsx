import gsap from 'gsap'
import { useEffect } from 'react'

export const useScrollAnimation = (className: string): void => {
	useEffect(() => {
		const unsub = () => {
			gsap.from(className, {
				opacity: 0,
				duration: 2.5,
				scrollTrigger: {
					trigger: className,
					start: 'top 85%',
					once: true,
				},
			})
			console.log('triggering')
		}
		return unsub()
	}, [className])
}
