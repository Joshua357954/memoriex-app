import React from 'react'
import { useState, useEffect } from 'react'
import useAuth  from "../hooks/useAuth.jsx"	
import UseTheme from '../hooks/useTheme.jsx'
import { getConversations } from '../api/converationAPI.js'   
import ChatBody from '../components/Chat-Components/chatBody.jsx'
import OnlineFriends from '../components/Chat-Components/onlineFriends.jsx'
import ConversationList from '../components/Chat-Components/conversationList.jsx'

export default function ChatScreen() {

	const [toggleTheme,current] = UseTheme()

	const [currentUser] = useAuth()

	// const {recipient} = useContext(NewRecipient)

	const [openMobileChat, setOpenMobileChat] = useState(false)

	const [ conversation, setConversation ] = useState(null)

	const [ isLoading, setIsLoading ] = useState(false) 

	const [ currentConversation,setCurrentConversation] = useState(null)

	useEffect(() => {
		setIsLoading(true)
		// console.log(currentUser)
		const fetch = async()=>{
			const data = await getConversations(currentUser?.id)
			// console.log("My people" , data)
			setConversation(data)	
			setIsLoading(false)
		} 
		fetch()   
	}, [currentUser])

	if(isLoading)
		return <h2 className="text-center mt-5 text-gray-400">Loading ...</h2>
	  

	return ( 

		<main className="h-screen dark:bg-gray-900 bg-gray-200 w-full grid grid-cols-1 grid-rows-4 py-1 relative  md:static md:mr-1">
			{/*<div className="row-span-1 mb-2">

				<OnlineFriends />
			</div>*/}
			
			<div className="row-span-4  grid grid-cols-3 h-full grid-rows-1 mx-5 md:mx-1">
				<ConversationList data={conversation} mainUser={currentUser}/>

				<ChatBody mainUser={currentUser} />
			</div>

		</main>
	)
}