import React from 'react'

export default function SettingsEntryCard1() {
	return (

		<div className='flex flex-col w-full h-full space-y-4 pt-2 dark:bg-gray-600 bg-gray-100 justifystary items-center'>
			
			<label htmlFor="note" className="dark:text-gray-50 text-sm text-left font-extralight">Edit Your Profile Info</label>

			<input defaultValue="Joshua"	name="username" className="border-2 border-blue-100 py-1 px-2 rounded-md placeholder-gray-400 text-sm focus:outline-none"
			placeholder="UserName" />

			<input defaultValue="123456" name="password" className="border-2 border-blue-100 py-1 px-2 rounded-md placeholder-gray-400 text-sm focus:outline-none"
			placeholder="Password" />

			<label htmlFor="password2" className="dark:text-gray-50 text-sm text-left font-extralight">Pls Only Fill To Change Password</label>
			<input name="password2" className="py-1 px-2 border-2 border-blue-100 rounded-sm placeholder-gray-400 text-sm focus:outline-none"
			placeholder="Confirm Password" />

			<button className="bg-blue-400 dark:bg-blue-300  dark:text-gray-900 text-center py-2 w-full">Save Changes</button>
		</div>
	)
}