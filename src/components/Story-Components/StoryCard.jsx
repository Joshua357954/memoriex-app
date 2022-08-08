

import React from 'react'
import { useContext } from 'react'
import Pix2 from '../../fonts/pix3.png'
import { ViewStory } from '../../context/showStoryContext.jsx'
import StoryContext from '../../context/showStoryContext.jsx'

export default function StoryCard({action2,name,img}) {

	const {showStory,setShowStory} = StoryContext(ViewStory)

	function openStory(name,image,time,userId) {
		action2(true)
		//  Pass user name, image , time, userId  to the Story Viewer ..
	}

	return (
		<div onClick={openStory} className="h-full w-16 bg-gray-800 rounded-md relative mr-1 flex-shrink-0">
			<img src={Pix2} alt="profile pix" className='h-full object-cover rounded-md w-full' />
			<p className="dark:text-gray-50 text-white px-[2px] text-[10px] absolute bottom-2 left-1 text-white font-bold ">{name}</p>
		</div>
	)
}