import React from 'react'
import Pix2 from '../../fonts/pix2.png'
import { BsTrashFill as Trash } from 'react-icons/bs'

export default function NotificationCard({title,discription,time,unread}) {
	return (
		<div className={` relative w-full h-14 dark:bg-gray-800 ${unread?'bg-gray-200':'bg-gray-100'} bg-gray-100 mb-[5px] space-x-4 rounded-md  flex justify-start px-[6px] items-center`}>
			<div className="h-12 w-12 rounded-full"> 
				<img src={Pix2} alt="User Img" className="w-full p-1 h-full rounded-full"/> 
			</div>
			
			<div>	
				<p className="dark:text-gray-200 text-[16px] text-gray-900">{title}</p>
				<p className="text-[12px] dark:text-gray-300">{discription}</p>
				<p className="text-[9px] dark:text-gray-400">{time}</p>
			</div>
			
			<Trash className="absolute right-3 top-3 dark:hover:text-gray-200 text-gray-400 hover:text-gray-800 "/>
		</div>	
	)
}