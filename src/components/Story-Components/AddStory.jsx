
import React from 'react'
import { useContext } from 'react'
import { ViewStory } from '../../context/showStoryContext.jsx'

export default function AddStory({toggleAddStory}) {

	return (
		<div onClick={()=>toggleAddStory(false)} className="w-full h-full bg-pink-600">
			Add New Story
		</div>
	)
}