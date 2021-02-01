import React, { useState } from 'react'

interface TabsPropI {
	children: React.ReactElement[]
}
interface SingleTabPropI {
	children: React.ReactElement
}
interface TabPropI {
	title: string
}

export const Tabs: React.FC<TabsPropI> = ({ children }) => {
	const [activeTab, setActiveTab] = useState<string>(children[0].props.title)

	const onButtonClickHandler = (newActiveTab: string) => {
		setActiveTab(newActiveTab)
	}

	return (
		<div className='tabs'>
			<ul className='tabs-items'>
				{children.map((child, i) => (
					<li
						className={child.props.title === activeTab ? 'active-tab' : ''}
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
	return <div>{children}</div>
}

//just single tab
export const SingleTab: React.FC<SingleTabPropI> = ({ children }) => {
	return (
		<div className='tabs'>
			<ul className='tabs-items'>
				<li className='active-tab'>{children.props.title}</li>
			</ul>
			<div className='content'>{children}</div>
		</div>
	)
}
