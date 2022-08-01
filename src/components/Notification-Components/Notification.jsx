import React from 'react'
import NotificationCard from './NotificationCard.jsx'

export default function Notification() {
	const scrollbar = 'scrollbar scrollbar-thin dark:scrollbar-track-gray-600 cursor-pointer  dark:hover:scrollbar-thumb-gray-500 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400'
	
	return (
		<div className={`col-span-6 md:col-span-4 lg:col-span-3 h-full justify-center flex-col justify-center items-center ${scrollbar}`}>
			<div className="w-full h-full px-2 ">

				<h1 className="text-left text-xl dark:text-gray-50 font-bold py-1">Notifications</h1>

				<div className="h-9 w-full mb-2 dark:bg-gray-700 dark:text-blue-400 text-blue-500 bg-gray-200 justify-center flex items-center "> Mark All as Read </div>

				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm" unread={true}/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>	
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>
				<NotificationCard title="Kilodae" discription="Samuel liked your profile picture" time="12:42pm"/>


			</div>

			
		</div>
	)
}