import React from 'react'
import AllFriendCard from './AllFriendCard.jsx'
import { IoMdArrowBack as BackBtn } from 'react-icons/io'

export default function AllFriends({off}) {

	return (
		<div className="w-full h-full dark:bg-gray-800 bg-gray-50 overflow-y-auto">
			<div className="w-full h-14 mb-2 flex items-center dark:bg-gray-700 bg-gray-100 justify-start p-1 space-x-2">
				<BackBtn onClick={() => off(false)} className="text-gray-900 dark:text-gray-50 text-2xl"/> 
				<p className="text-gray-800 dark:text-gray-100">Your Friends </p>
			</div>

			
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />
				<AllFriendCard name="Ugheba" />

		
			
		</div>
	)
}