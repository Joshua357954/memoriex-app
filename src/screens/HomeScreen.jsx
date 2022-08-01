import React from 'react'
import useAuth from '../hooks/useAuth.jsx'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowBack as ArrowBack } from 'react-icons/io'
import { useContext, useState, useCallback } from 'react'
import NavBar from '../components/Nav-Components/Navbar.jsx'
import Settings from '../components/Settings-Components/Settings.jsx'
import Friend from '../components/Friend-Components/Friend.jsx'
import Utilities from '../components/Post-Components/Utilities.jsx'
import FriendRequests from '../components/Friend-Components/FriendRequest.jsx'
import Notification from '../components/Notification-Components/Notification.jsx'
import MainPostContainer from '../components/Post-Components/MainPostContainer.jsx'
import FriendSuggestion from '../components/Friend-Components/FriendSuggestion.jsx'

export default function PostScreen() {
	const [openSettings,setOpenSettings] = useState(false)
	const [currentScreen,setCurrentScreen] = useState('POST')
	const nextScreen = useCallback((screen) => {
			setCurrentScreen(screen)
		}
	)
	const showSettings = (bool) => {
		setOpenSettings(true)
	}
	const scrollbar = 'scrollbar scrollbar-thin dark:scrollbar-track-gray-500 cursor-pointer  dark:hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400'

	return (
		<main className="relative dark:bg-gray-800 bg-gray-100  h-screen w-screen">

			<section className="flex flex-col grid-rows-6 dark:bg-gray-800 grid-cols-1 w-full h-full">

				<NavBar changeScreen={nextScreen} onSettings={showSettings} />

				<div className="h-[90vh] grid grid-cols-6 grid-rows-1 transition-all">
					
					<Utilities />
				{/* Change Screens Conditionally */}
					{ (currentScreen=='POST'? <MainPostContainer /> : currentScreen=='FRIEND'? <Friend /> : currentScreen=='NOTIFY'? <Notification /> : <MainPostContainer/> ) }
			
					<div className="md:col-span-1 lg:col-span-2 row-span-1 bg-orange-300 hidden lg:grid grid-rows-6 h-full ">	
						
						<FriendSuggestion/>
						<FriendRequests/>

					</div>

				</div>

			{/*  Settings Panel  */}
			{ openSettings ?
				<div className="bg-transparent w-screen h absolute top-0 bottom-[-20px] left-0 right-0 flex justify-end" >
					<div className="bg-gray-100 dark:bg-gray-700 w-screen md:w-[45vw] lg:w-[30vw] h-full ">
						<div className="w-full h-12 dark:bg-gray-700 bg-gray-300 flex  dark:text-gray-50 textjustify-start items-center space-x-4 px-1">
							<ArrowBack onClick={()=>setOpenSettings(false)} size={25} className="dark:text-gray-50 text-gray-800" />
							<p className="dark:text-gray-100 text-gray-900">Settings</p>
						</div>

						<div className={`md:${scrollbar} h-[90vh] w-full overflow-y-auto`}>	
							<Settings/>
						</div>
						
					</div>
				</div> : "" 
			}

			</section>
		</main>
	)
}
























































































































































































































































































































































































































































































































// const navigate = useNavigate()
	// const [currentUser, setCurrentUser,LogOut]= useAuth()
	// console.log(currentUser)

	// if(!currentUser || !currentUser===null || !currentUser===undefined)
	// 	return  <div className="w-screen"> 
	// 				<h1 className="text-2xl text-center text-indigo-300 mt-3">No User Yet , Loading ...</h1>
	// 				<button className="border-2 border-red-300 bg-white p-4 mt-4 ml-8 rounded hover:rounded-2"
	// 						onClick={()=> navigate('/Login')}> {'<- Login'}
	// 				</button>
	// 			</div>

	// return (
	// 	<div className='flex flex-col w-full justify-center gap-4 text-2xl'>
	// 		<span className='text-center mt-2 text-red-400-300'>{currentUser?.username}</span>
	// 		<p className="text-center text-orange-300">Hello My post people ....</p>
	// 		<button className="border-2 border-gray-400 bg-white p-4 mt-4 mx-auto rounded hover:rounded-2"
	// 				onClick={()=>LogOut()}>
	// 			LogOut
	// 		</button>

	// 	</div>

	// )