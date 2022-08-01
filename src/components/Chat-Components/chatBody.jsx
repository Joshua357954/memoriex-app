import Pix from './../../fonts/pix1.png'
import { BiArrowBack }  from 'react-icons/bi'
// import { Picker } from 'emoji-picker-element'
import { IoMdArrowBack } from 'react-icons/io'
import { FiSend as SendIcon } from 'react-icons/fi'
import { MobileChat } from './../../context/mobileChatState'
import { BsEmojiSmile as Emoji  } from 'react-icons/bs'
import { ImAttachment as Attachement } from 'react-icons/im'
import { NewRecipient } from './../../context/recipientContext.jsx'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { getConversationMessages, sendMessageToChat } from './../../api/messageAPI.js'    


export default function chatBody({data,mainUser}) {

	const {mobileChatOpen, setChatOpen} = useContext(MobileChat)
	const {recipient, setRecipient} = useContext(NewRecipient)
	const [chatMessages,setChatMessages] = useState([])
	const [text,setText] = useState('')
	const [openEmojies, setOpenEmojies] = useState(false)

	// Emoji Picker initialization 
	// const Emojies = new Picker({
	// 	locale:'en',
	// 	dataSource: '/en/emojibase/data.json'
	// })
	// const emojiRef = useRef()

	// useEffect(() => {
	// 	emojiRef.current.appendChild(Emojies)
	// }, [])

	// console.log(mainUser)

	// Check if the id belongs to the current loggedin user
	const isUserOwn= (sender,receiver) => sender===receiver

	const chatInputRef = useRef()
	const scrollToRef = useRef()
	

	// Set Window Width On resize
	const [winWidth,setWinWidth] = useState(0)
	window.addEventListener('resize',(e)=> setWinWidth(e.target.innerWidth))


	// Scroll To Bottom
	useEffect(() => {
		scrollToRef.current?.scrollIntoView({behavior:'smooth'})
	}, [chatMessages])


	// Get Messages 
	useEffect(() => {
		console.log(recipient)
		const getChatMessages = async() =>{
			const msgs = await getConversationMessages(recipient.convId)
			console.log("Message : ",msgs)
			setChatMessages(msgs) 
		}
		getChatMessages()
	}, [recipient])


	// Tailwind Styles
	const tw={
		chat_header:" bg-white w-full border-2 border-b-gray-300 row-span-1 px-2 flex gap-4 justify-start items-center rounded",
		chat_main:`${mobileChatOpen ? 'absolute top-0 left-0 bottom-0 right-0 ' : 'hidden'} bg-orange-100 h-full grid grid-rows-5 transition-all col-span-2 md:ml-2 rounded md:static`
	}

	//  Add Message To Ui State
	function addMessageToChat(SenderId,text){
		const newMessage = {
			ConversationId: recipient.covId,
			SenderId,
			createdAt: `${new Date}`,
			id: chatMessages.length,
			text,
			updatedAt: `${new Date}`
		}
		setChatMessages(prev => [...prev,newMessage])
	}

	// Send Message To Database
	const sendMessage = async() =>{
		if (!text) return 
		// Play sound if sent
		console.log(recipient)
		try{
			await sendMessageToChat(recipient.convId,mainUser['id'],text)
			addMessageToChat(mainUser['id'],text)
			setText('')
			chatInputRef.current.focus()
			console.log("Message Sent to : ",mainUser['id'])
		}
		catch(error){
			console.log(error)
		}
	}



	// Ui Render
	return (
		<div className={tw.chat_main}>
			<div className={tw.chat_header}>

				{winWidth < 780 ? <BiArrowBack onClick={()=> setChatOpen(false)} size={25} /> : ""}
					
				<div className="flex-col w-14 h-14 mx-2 md:mr-2 flex justify-center items-center relative rounded-full border-[3px] border-gray-300">
					<img src={Pix} alt="chat-name"/>
					<div></div>
				</div>

				<div>
					<h1 className="text-gray-900">{recipient?.username}</h1>
					 <p className="pl-2 text-sm font-light">online</p>
				</div>
		
			</div>

			<div className="row-span-4 bg-white h-full transition-all flex flex-col overflow-y-scroll w-full h-full px-8 pt-2">
				
				{ chatMessages ? 	
					(chatMessages.map((mesg)=>{
						const messageUser= isUserOwn(mesg.SenderId,recipient?.id)
						return (<div key={mesg.id+Math.floor(Math.random(200))} className={`border-t-2  p-2 my-[10px] w-40 max-w-2xl select-none md:max-w-2xl ${messageUser ? 'self-end bg-gray-100 rounded-tr-none' : 'self-start bg-blue-100 rounded-tl-none'} rounded-lg `}>
									<h2 className="font-extralight  text-gray-600 text-sm">{ messageUser ? recipient.username : mainUser.username}</h2>
									<p>{mesg.text}</p>
							</div>)
						})
					)   :    ""
				}

				<div ref={scrollToRef} />

			</div>
      

			<div className="row-span-1 bg-white flex justify-evenly items-center px-5">
				
			{/*	{ openEmojies ? <div ref={emojiRef} /> : "" }
				*/}

				<div className="flex justify-between rounded-full mb-2  px-4 my-4 items-center bg-gray-200 w-[75%] mr-6 py-1 md:py-2 ">
					<Emoji className={`${openEmojies ? 'text-yellow-400' : 'text-gray-800'} transition-all text-3xl md:text-4xl`}  onClick={()=>setOpenEmojies(!openEmojies)}/>
					
					<input 
						placeholder="Type a message " 
						ref={chatInputRef} 
						value={text} 
						onChange={({target})=>setText(target.value)}
						type="text" className='my-auto w-full bg-transparent p-2 mx-3 md:text-sm text-md font-extralight focus:outline-none'
					 />

					<Attachement className="text-gray-800 text-3xl md:text-4xl"/>
				</div>

				<div className="text-white rounded-full bg-green-300"> 
					<SendIcon className="text-3xl md:text-4xl m-3 " onClick={sendMessage}/>
				</div>
			</div>
		</div>
	)
} 