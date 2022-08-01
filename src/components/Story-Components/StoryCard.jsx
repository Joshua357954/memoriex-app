
import Pix2 from '../../fonts/pix3.png'
import React from 'react'

export default function StoryCard({name,img}) {
	return (
		<div className="h-full w-16 bg-gray-800 rounded-md relative mr-1 flex-shrink-0">
			<img src={Pix2} alt="profile pix" className='h-full object-cover rounded-md w-full' />
			<p className="dark:text-gray-50 text-white px-[2px] text-[10px] absolute bottom-2 left-1 text-white font-bold ">{name}</p>
		</div>
	)
}