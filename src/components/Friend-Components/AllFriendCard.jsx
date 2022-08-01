import React from 'react'
import Pix2 from '../../fonts/pix2.png'
import {BsChat as Chat, BsCheckLg as Check, BsTrashFill as Trash } from 'react-icons/bs'


export default function AllFriendCard({name}) {
	return (
			<div className="w-full h-16 dark:bg-gray-800 bg-gray-100 mb-[5px] rounded-md  flex justify-between px-[6px] items-center">
			<div className="h-[90%] rounded-full"> 
				<img src={Pix2} alt="User Img" className="w-12 p-1 h-full rounded-full"/> 
			</div>

			<p className="dark:text-gray-100 text-gray-900">{name}</p>

			<div className="flex justify-between mr-1 space-x-2 w-22 dark:text-gray-100 text-gray-800">
				<div className="px-3 py-3 rounded-md dark:bg-gray-600 shadow bg-gray-300"><Chat/></div>
				<div className="px-3 py-3 rounded-md dark:bg-gray-600 shadow bg-gray-300"><Trash/></div>
			</div>	

		</div>	
	)
}