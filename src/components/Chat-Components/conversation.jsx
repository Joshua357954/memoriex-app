import React from 'react'
import Pix from './../../fonts/pix2.png'
import useAuth  from "./../../hooks/useAuth.jsx"
import { useState, useEffect, useContext } from 'react'
import { getUserById } from './../../api/userAPI.js'
import { MobileChat } from './../../context/mobileChatState'
import { NewRecipient } from './../../context/recipientContext.jsx'

export default function conversation({data}) {

	const [user,setUser] = useState('')
	const {mobileChatOpen, setChatOpen} = useContext(MobileChat)
	const {recipient, setRecipient} = useContext(NewRecipient)
	const [breakPoint,setbreakPoint] = useState(window.innerWidth)
	
	useEffect(() => {
		window.addEventListener('resize',()=>setbreakPoint(window.innerWidth))
	}, [window.innerWidth])

	// Get Recipient Effect
	useEffect(() => {
		const getRecipient = async()=>{
			const recipient1=data.userid1==data.currentUserId ? data.userid2 : data.userid1
			const userDetails = await getUserById(recipient1)
			setUser(userDetails)
		}
		getRecipient()  
	}, [])


	// Ui Render
	return (
		<div className={`flex w-full px-2 py-3 dark:text-gray-300  rounded-sm ${breakPoint>520 && breakPoint<628 ? "justify-center":'justify-between'} items-center h-[5rem] cursor-default`} onClick={()=>{
			// Open conversation
			setRecipient({'id':user?.id,'convId':data?.id,'username':user?.username,img:user?.pix})
			setChatOpen(true)
		}}>

			<div className="flex bg-transparent h-full justify-between items-center">
				<div className="flex-col w-14 h-14 mx-2 md:mr-2 flex justify-center items-center relative rounded-full border-[3px] border-gray-300">
					<img src={Pix} alt="chat-name" />
					<div className="bg-blue-200 rounded-full flex w-4 h-4 m-auto absolute bottom-[-2px] right-[-2px]"></div>
				</div>

				<div className={`flex-col justify-around ${breakPoint>520 && breakPoint<780 ? "hidden":'flex'} h-full transition-all`}>
					<h2>{user?.username|| 'Jane'}</h2>
					<p className="text-xs font-extralight break-words">Hi there,How are you</p>
				</div>
			</div>

			<div className={`flex-col justify-between items-center ${breakPoint>520 && breakPoint<630 ? "hidden":'flex'}  h-full`}>
				<p className="flex flex-col justify-evenly items-center  h-full">8:45</p>
				<span className="py-1 px-2 bg-orange-300 m-auto rounded-full text-sm text-white">5</span>
			</div>
		</div>
	)
}