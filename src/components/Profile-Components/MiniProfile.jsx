
import React from 'react'

export default function MiniProfile() {
	return (
		<div className='flex w-[90%] flex-col bg-transparent'>
			<div className='flex justify-between space-x-1 bg-gray-100 dark:bg-gray-500 py-1 px-1 rounded-sm items-center px-1'>
				<div className=" text-white text-center bg-gray-800 w-8 h-8 rounded-full flex justify-center items-center"><p>J</p></div>
				<div className="w-[95%]">
					<p className='text-sm dark:text-gray-50 text-gray-800'>Joshua B</p>
					<span className="text-xs dark:text-gray-100 text-gray-700">@ Janxxi</span>
				</div>
			</div> 
		</div>
	)
}
