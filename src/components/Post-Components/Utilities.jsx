import React from 'react'
import UtilsCard from './UtilsCard.jsx'
import { FaUserAlt as User } from 'react-icons/fa'
import { MdEvent as Event, MdSettings as Setting } from 'react-icons/md'
// import { BiCalenderEvent as Event2 } from 'react-icons/bi'
import { HiOutlineLogout as LogOut } from 'react-icons/hi'


import ThemeToggle from '../Settings-Components/Theme.jsx'

export default function Utilities() {
	const utilsDetails = [
				{name:"Profile",icon:<User fill='rgba(1,1,1,0.7)' />},
				{name:"Event",icon:<Event fill='rgba(1,1,1,0.7)'/>},
				{name:"Settings",icon:<Setting fill='rgba(1,1,1,0.7)'/>},
				{name:"LogOut",icon:<LogOut />}
	]
	return (
		<aside className="hidden  md:block md:col-span-2 lg:col-span-1 transition-all cursor-default dark:bg-gray-900  bg-white">	
			
			<div className=" h-full w-full flex flex-col items-center justify-around">
				
				<div className='flex w-[90%] flex-col bg-transparent '>
					<p className="p-2 pt-[2.5px] self-start dark:text-white ">For You</p>

					<div className='flex justify-between space-x-1 bg-gray-100 dark:bg-gray-500 py-1 px-1 rounded-sm items-center px-1'>
						<div className=" text-white text-center bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center"><p>J</p></div>
						<div className="w-[95%]">
							<p className='text-sm dark:text-gray-50 text-gray-800'>Joshua B</p>
							<span className="text-xs dark:text-gray-100 text-gray-700">@ Janxxi</span>
						</div>
					</div> 

				</div>

				<div className="w-[93%] dark:bg-gray-500 bg-gray-100 flex flex-col justify-between space-y-4 px-2 py-3 rounded-md">
					{
						utilsDetails.map((item,idx)=> <UtilsCard key={idx} icon={item.icon} name={item.name} /> )
					}
					
				</div>

				{/* Toggle (Light/dark) */}
				<div className='w-[90%]'>	
					<ThemeToggle />
				</div>
			
			</div>

		</aside>	
	)
}