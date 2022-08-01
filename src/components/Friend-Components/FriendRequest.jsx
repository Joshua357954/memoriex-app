import React from 'react'
import RequestCard from './friendRequestCard.jsx'

export default function Friend() {
	return (
		<div className="row-span-3 dark:bg-gray-800 bg-white flex flex-col justify-start items-center ">
			<p className="dark:text-gray-100 py-1 text-sm text-left self-start  pl-2 font-bold">Friend Suggestions</p>
			<div className="w-[90%] mx-auto  overflow-y-scroll scrollbar scrollbar-track-white scrollbar-thumb-gray-300 pr-2 scrollbar-thin"> 
				<RequestCard name="Jane Agu"/>
				<RequestCard name="Jane Agu"/>
				<RequestCard name="samuel ria"/>
			</div>
			
		</div>
	)
}

