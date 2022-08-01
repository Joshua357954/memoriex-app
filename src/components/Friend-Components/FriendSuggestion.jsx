import FriendSugg from './friendSuggestionCard.jsx'
import React from 'react'

export default function FriendSuggestion() {
	return (
		<div id="sugg" className="row-span-3 dark:bg-gray-800 bg-white flex flex-col justify-start items-center ">
			<p className="py-1 text-sm text-left  self-start pl-2 font-bold dark:text-gray-100">Friend Requests</p>
			<div className="w-[90%] mx-auto  overflow-y-scroll scrollbar-track-white scrollbar-thumb-gray-300 scrollbar scrollbar-thin pr-2"> 
				<FriendSugg name="Sam Felix"/>
				<FriendSugg name="Aru Baka"/>
				<FriendSugg name="Dumelo sa"/>
			</div>
		</div>
	)
}

