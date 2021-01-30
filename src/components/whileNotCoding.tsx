import { useEffect, useState } from 'react'
import {
	SleepingText,
	Twitter,
	CodesandBox,
	EatingText,
	TravelingText,
	GithubSvg,
	Instagram,
} from '../icons'

export const WhileNotCoding: React.FC = () => {
	// const [eat, setEat] = useState<boolean>(true)
	// const [sleep, setSleep] = useState<boolean>(false)
	// const [travel, setTravel] = useState<boolean>(false)

	// useEffect(()=>{
	//     if(sleep === false && travel === false){
	//         setTimeout(() => {
	//             setSleep(true)
	//         },3000)
	//     }
	// },[eat , sleep , travel])
	return (
		<div className='container'>
			<div className='while-not-coding'>
				<h2>While I am not Coding...</h2>
				<br />
				<section className='socialcircle'>
					<section className='socials'>
						{/* <h2>using...</h2> */}
						<Twitter />
						<CodesandBox />
						<GithubSvg />
						<Instagram />
					</section>
					<section className='hobbies'>
						<h2>I am probably,</h2>
						<EatingText />
						<SleepingText />
						<TravelingText />
					</section>
				</section>
			</div>
		</div>
	)
}
