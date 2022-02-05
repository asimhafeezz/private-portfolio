import gsap from "gsap"
import React, { useEffect, useState } from "react"

interface TabsPropI {
	children: React.ReactElement[]
}
interface TabPropI {
	title: string
}

export const Tabs: React.FC<TabsPropI> = ({ children }) => {
	const [activeTab, setActiveTab] = useState<string>(children[0].props.title)

	const onButtonClickHandler = (newActiveTab: string) => {
		setActiveTab(newActiveTab)
	}

	useEffect(() => {
		const unsub = () => {
			gsap.to(".content", {
				opacity: 1,
				duration: 1.5,
			})
		}
		return unsub()
	}, [activeTab])

	return (
		<div className='tabs'>
			<ul className='tabs-items'>
				{children.map((child, i) => (
					<li
						className={child.props.title === activeTab ? "active-tab" : ""}
						onClick={() => onButtonClickHandler(child.props.title)}
						key={i}>
						{child.props.title}
					</li>
				))}
			</ul>
			{children.map((child, i) => {
				return (
					child.props.title === activeTab && (
						<div key={i} className='content'>
							{child}
						</div>
					)
				)
			})}
		</div>
	)
}

export const Tab: React.FC<TabPropI> = ({ children }) => {
	return <div className='single-tab'>{children}</div>
}
