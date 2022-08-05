import React from 'react'
import Theme from './Theme.jsx'
import { useState } from 'react'
import LockChat from './LockChat.jsx'
import { useNavigate } from 'react-router-dom'
import PersonalInfo from './SettingsEntryCard1.jsx'
import MiniProfile from '../Profile-Components/MiniProfile.jsx'
import { MdManageAccounts as Acct, MdLock as Lock } from 'react-icons/md'
import { FaExchangeAlt as Exchange } from 'react-icons/fa'


export default function Settings() {
	const collBtnH = '14'
	const navigate = useNavigate()
	const [Collapse,setCollapse] = useState( { 'acctSet':false, 'lockChat':false } )
	
	function toggleCollapse(item) {
		console.log(item)
		setCollapse((prev)=>({
			...prev,[item]:!Collapse[item],
		})) 
	}

	function logOut(){
		const sure = confirm('☸️ Are You Sure You Want To LogOut →')
		if (sure){
			navigate('/Accounts')
		}
	}

	const scrollbar = 'scrollbar scrollbar-thin dark:scrollbar-track-gray-600 cursor-pointer  dark:hover:scrollbar-thumb-gray-500 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400'

	return (
		<div className="h-full w-full dark:bg-gray-700 bg-gray-100 ">
			 <div className={`flex flex-col w-full `}>	
					
				<div className="w-full my-3">	
					<MiniProfile/>
				</div>
					
				{/* Update Profile */}
				{/*<div className={`transition-all ${Collapse['acctSet']? "max-h-45" : `max-h-${collBtnH}`} overflow-hidden w-full`}>*/}
				<div className={`transition-all focus:outline-none  ${Collapse['acctSet']? "max-h-45" : `h-${collBtnH}`} overflow-hidden w-full`}>
					<div onClick={()=>toggleCollapse('acctSet')} className={`cursor-pointer h-${collBtnH} space-x-2 px-2 py-1 dark:bg-gray-400 bg-gray-200 flex items-center dark:text-gray-50 text-gray-800 rounded-sm`}>
						<Acct size={23}className="text-gray-900" /> <p className="text-sm">Account</p>
					</div>
  
					<div className="w-full h-full ">

						<PersonalInfo />

					</div>		
				</div>

			{/* Others */}
				<div className="focus:outline-none flex flex-col space-y-3 my-4 px-2 dark:text-gray-50" >	
					
					<div onClick={logOut}className="mt-3 flex space-x-4" ><p>Switch Account</p> <Exchange/></div>


				</div>

			{/* Lock Chat */}
				<div className={`transition-all  ${Collapse['lockChat']? "max-h-45" : `h-${collBtnH}`} overflow-hidden w-full`}>
					<div onClick={()=>toggleCollapse('lockChat')} className={`cursor-pointer h-${collBtnH} space-x-4 px-2 py-1 dark:bg-gray-400 bg-gray-200 flex items-center dark:text-gray-50 text-gray-800 rounded-sm`}>
						<Lock size={23}className="text-gray-900" /> <p className="text-sm">Lock Chat</p>
					</div>

					<div className="w-full h-full ">

						<LockChat/>

					</div>		
				</div>

				<div className="mx-2 my-3">	
					<Theme />
				</div>
				

			</div>
		</div>
	)
}