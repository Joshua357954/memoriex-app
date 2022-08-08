import React from 'react'
import { useContext } from 'react'
import { ViewStory } from '../../context/showStoryContext.jsx'
	
export default function ViewStoryBox({toggleViewStoryBox}) {

	const {showStory,setShowStory} = useContext(ViewStory)

	function closeStory () {
		setShowStory({})
		toggleViewStoryBox(false)
	}


	return (
		<div onClick={closeStory} className="w-full h-full bg-fuchsia-600">
			view Story
		</div>
	)
}