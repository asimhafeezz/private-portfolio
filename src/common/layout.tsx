import React from 'react'

//animation trigger gsap
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Layout: React.FC = ({ children }) => {
	return <main>{children}</main>
}
