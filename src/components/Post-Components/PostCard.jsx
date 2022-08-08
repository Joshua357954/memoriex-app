import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { AiFillLike as Like } from 'react-icons/ai'
import { FcLike as Love } from 'react-icons/fc'
import { BsEmojiLaughingFill as Laugh, BsEmojiAngryFill as Angry } from 'react-icons/bs'
import { HiEmojiHappy as Happy, HiEmojiSad as Sad } from 'react-icons/hi'
import Pix0 from '../../fonts/pix1.png'
import PPix from '../../fonts/pix3.png'
import { FaThumbsUp as Like3 , FaRegThumbsUp as Like2 } from 'react-icons/fa'
import { BsChat as Comment ,BsEmojiHeartEyesFill as Loves } from 'react-icons/bs'
import { RiShareForwardLine as Share} from 'react-icons/ri'

export default function PostCard({PCRef,postId,username,text,img,time,link}) {
	const scrollRef = useRef(null)
	const [openReactions,setOpenReactions] = useState(false)
	let scrollTop = ""

	function lockScroll(){
		console.log("Scrolling : ",scrollTop)
		PCRef.current.scrollTo(0,scrollTop)
	}

	const closeReactionBox = () => {
		setOpenReactions(false)
		PCRef.current.onscroll = "Empty The Function"
	}
	const showReactions = () => {
		setOpenReactions(true)
		scrollTop = PCRef.current.scrollTop
		PCRef.current.onscroll = lockScroll
	}

	return text ? (
		<div ref={scrollRef} className="w-full h-[500px] transition-all  md:h-[520px] dark:text-gray-50 bg-white border-1 border-t-gray-300 shadow-md mb-3 relative"> 
			
			{/* Top Post Bar */}
			<div className="flex  dark:bg-gray-800 px-1 border-1 border-b-blue-300 pt-1 flex-row items-center relative">
				
				<div className="w-12 h-12 flex justify-center items-center rounded-full p-1 border-2 border-red-300">
					<img src={Pix0} alt="" className="w-full  " />
				</div>

				<div className="ml-2">
					<p className="text-sm">Joshua Boyi  Shared A Post</p>
					<p className="text-xs font-light">12 Jun 2022</p>
				</div>

				<div className='absolute top-1 right-2'>...</div>
			</div>
			
			{/* 2nd Post Section */}
			<div className="cursor-default w-full pb-1 pt-2 text-sm font-extralight dark:bg-gray-800 px-1">
				<p onClick={closeReactionBox}>My name is Joshua Boyi Ifeola , if you know me 
				very well and the people are supposed to get all the
				pvc's and get vote peter obi because he is a very good 
				candidate. </p>
			</div>
			
			{/* 3rd Section */}
			<div className="w-full dark:bg-gray-800">
				<img src={PPix} alt="post-pix" className="w-full" onClick={closeReactionBox}/>
				<p className="pl-1 text-sm font-extralight">&#128151; &#128516; &#128524; You and 24 Others</p>
			</div>
			
			{/* Utils Section*/}
			<div className="flex select-none cursor-pointer dark:bg-gray-800 justify-between p-2">
				<div onDoubleClick={showReactions} className="text-blue-500 px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100 flex justify-between items-center space-x-2"><Like/>12</div>
				<div className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100"><Comment/></div>
				<div className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100"><Share/></div>
			</div>

		{ openReactions ? 
			<div className="flex justify-around items-center absolute  rounded-md border-2 dark:border-gray-400 border-gray-200 dark:bg-gray-600 bg-gray-50 h-24 right-10 bottom-14 left-10">	
				<div className="bg-blue-500 p-2 rounded-full text-white"> <Like/></div>
				<div className="bg-red-500 p-2 rounded-full text-white"> <Loves/></div>
				<div className="bg-yellow-400 p-2 rounded-full text-white"> <Happy/></div>
				<div className="bg-pink-500 p-2 rounded-full text-white"> <Sad/></div>
				<div className="bg-orange-500 p-2 rounded-full text-white"> <Angry/></div>

			</div> : "" 
		}
		</div>
	)
		// Post Card With Only Text (without image)
	: (
		<div ref={scrollRef} className="w-full transition-all mb-1 dark:text-gray-50 bg-white border-1 border-t-gray-300 shadow-md mb-3 relative"> 
			
			{/* Top Post Bar */}
			<div className="flex cursor-pointer dark:bg-gray-800 px-1 border-1 border-b-blue-300 pt-1 flex-row items-center relative">
				<div className="w-12 h-12 flex justify-center items-center rounded-full p-1 border-2 border-red-300">
					<img src={Pix0} alt="" className="w-full  " />
				</div>

				<div className="ml-2">
					<p className="text-sm">Joshua Boyi  Shared A Post</p>
					<p className="text-xs font-light">12 Jun 2022</p>
				</div>

				<div className='absolute top-1 right-2 '>...</div>
			</div>
			
			{/* 2nd Post Section */}
			<div className="cursor-default w-full pb-1 pt-2 text-sm font-extralight dark:bg-gray-800 px-1">
				<p onClick={closeReactionBox}>My name is Joshua Boyi Ifeola , if you know me 
				very well and the people are supposed to get all the
				pvc's and get vote peter obi because he is a very good 
				candidate. </p>
			</div>
	
			{/* Utils Section*/}
			<div className="flex select-none cursor-pointer dark:bg-gray-800 justify-between p-2">
				<div onDoubleClick={showReactions} className="text-blue-500 px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100 flex justify-between items-center space-x-2"><Like/>12</div>
				<div className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100"><Comment/></div>
				<div className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100"><Share/></div>
			</div>

		{ openReactions ? 
			<div className="absolute text-2xl flex justify-around items-center rounded-md border-2 dark:border-gray-400 border-gray-200 dark:bg-gray-600 bg-gray-50 h-24 right-10 bottom-14 left-10">	
		
					<div className="bg-blue-500 p-2 rounded-full text-white"> <Like/></div>
					<div className="bg-red-500 p-2 rounded-full text-white"> <Loves/></div>
					<div className="bg-yellow-400 p-2 rounded-full text-white"> <Happy/></div>
					<div className="bg-pink-500 p-2 rounded-full text-white"> <Sad/></div>
					<div className="bg-orange-500 p-2 rounded-full text-white"> <Angry/></div>

			</div> : "" 
		}
		</div>
	)
}

