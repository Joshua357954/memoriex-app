import './../../style.css'
import React from  'react'
import { useState, useEffect } from 'react'
import Conversation from './conversation.jsx'
import { useNavigate } from 'react-router-dom'
import { BiSearch as SearchIcon  } from 'react-icons/bi'

export default function conversationList({data,mainUser}) {
	const navigate = useNavigate()
	const [searchValue,setSearchValue]  = useState("")
	const [conversation,setConversation] = useState(null)

	// Set Conversation Data To State
	useEffect(() => {
		setConversation(data)
		console.log("Fake  man oh alert : ",data)
	}, [data])


	// Test Effect
	useEffect(() => {
		console.log("My Effect Oh : ",data)
	}, [data])
	


	// Assemble Conversation In State
	useEffect(() => {
		if (data){
			console.log("Conv Data Init : ",data)
			const newConv= []
			data.map((conv)=> {
				const getRecipient = async()=>{
					const recipient1=conv.userid1== mainUser['_id'] ? conv.userid2 : conv.userid1
					const userDetails = await getUserById(recipient1)
					console.log('Conv State Details : ',userDetails)
					return await userDetails
				}
				newConv.push(getRecipient())
			})
			console.log("Conversation Assemble : ",newConv)
	 }
	}, [data])



	// Search Conversation Effect
	useEffect(() => {
		if (searchValue)
			// setSearchValue(
			console.log(conversation)
	}, [searchValue])



	// Ui Render
	return (
		<aside className="flex h-full px-1 justify-center items-center col-span-3  md:col-span-1 w-full ">

			<div className='grid grid-rows-5 w-full pt-3 grid-cols-1'>

				<div className="flex w-full row-span-1 dark:bg-gray-400 bg-white mx-1 px-3 py-2 items-center h-14 justify-start rounded-full ">
					<SearchIcon className="text-green-400  text-2xl"/>
					<input className="dark:placeholder-gray-100 focus:outline-none w-full bg-transparent rounded mx-1 text-sm md:text-lg"
						type="text" 
						placeholder="Search"
						value={searchValue} 
						onChange={({target})=>setSearchValue(target.value)}	
					/>
					<button onClick={()=>navigate('/')} className="bg-green-300 h-full dark:text-gray-600 font-bold px-2 py-1 rounded-md text-gray-800">Home</button>
				</div>

			{/*	<div className='conversation-box '>
					
					{ conversation ?

					conversation.map(conv => <Conversation key={conv.id} data={{...conv,'currentUserId':mainUser?.id}} /> )

						: <h2 className="text-blue-300 text-center text-xl my-auto">Searching</h2>
					}
				</div>*/}
				
			{	<div className='bg-white dark:bg-gray-600 h-[72vh] row-span-4 mx-3 mt-3 rounded-md px-2 py-2 items-center overflow-y-scroll'>
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />
					<Conversation />		
				</div>
				

}
			</div>
		
		</aside>
	)
}