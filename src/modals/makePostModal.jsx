import React from 'react'
import Pix2 from './../fonts/pix3.png'
import Pix5 from './../fonts/pix2.png'
import { MdClose } from 'react-icons/md'
import {IoMdImages as ImgPix } from 'react-icons/io'
import {NavHide} from '../context/hideNavContext.jsx'
import { useState, useEffect, useRef, useContext } from 'react'

export default function makePostModal({PREF,action}) {	
	const {setHideNav} = useContext(NavHide)
	let scrollTop = ""

	function lockScroll(){
		console.log("Scrolling : ",scrollTop)
		PREF.current.scrollTo(0,scrollTop)
	}

	const OpenScroll = () => {
		action(false)
		setHideNav(false)
		PREF.current.onscroll = "Empty The Function"
	}
	const BlockScroll = () => {
		scrollTop = PREF.current.scrollTop
		PREF.current.onscroll = lockScroll
	}
	BlockScroll()

	return (
		<div className="transition-all absolute top-0 left-0 bottom-0 right-0 dark:bg-gray-800 bg-gray-100 flex flex-col justify-center items-center ">
			<div className="w-full h-full">
				<div className="h-14 dark:bg-gray-500 bg-gray-200 px-2  flex justify-between items-center">
					<div className="flex space-x-4">	
						<MdClose size={20} onClick={OpenScroll} className="dark:text-gray-100 text-gray-800"/>
						<p className="dark:text-gray-100 text-gray-800 ">Create Post</p>
					</div>
					<p className="dark:text-blue-400 text-blue-500 font-bold">POST</p>
				</div>	

				<div className="flex py-1 justify-start items-center space-x-2 px-1">
					<div className="w-14 h-14 items-center rounded-full border-2 border-emerald-500 mr-1  ">
						<img src={Pix2} alt="profile pix" className="w-full h-full p-[2px] rounded-full" />
					</div>

					<div className="dark:bg-gray-600 dark:text-gray-200 bg-gray-300 p-1 rounded-md">
						<select className="bg-transparent flex focus:outline-none"name="api-verbs">
							<option value='Friends'>Friends</option>
							<option value='Public'>Public</option>
							<option value='Private'>Private</option>
							<option value='Memory'>Memory</option>	
						</select>
					</div>
				</div>	

				<textarea className="mx-1 w-[96%] resize-none border-2 mt-2 dark:border-gray-400 border-gray-200 px-1 pt-2 dark:bg-gray-600 dark:text-gray-50 text-gray-700 text-sm bg-gray-100 dark:placeholder-gray-100 placeholder-gray-400 h-32 rounded-sm focus:outline-none"
				placeholder="What is on your mind ? "
				type="text" />

			<div className="w-full px-2 mt-3 flex flex-col ">
					<div className="dark:bg-gray-600 dark:text-gray-200 bg-gray-300 p-1 w-44 mt-1 rounded-md">
						<select className="bg-transparent flex focus:outline-none"name="api-verbs">
							<option value='Normal'>Backgrounds</option>
							<option value='Red'>Red 🍎</option>
							<option value='Blue'>Blue 💧</option>
							<option value='Green'>Green 🍏</option>
							<option value='Gray'>Gray 🌑</option>
							<option value='yellow'>Yellow 🌟</option>
								
						</select>
					</div>

					<div className="flex items-center mt-2 space-x-2" ><ImgPix className="text-green-600"/> <p className="text-sm md:text-md dark:text-gray-100"> Photos/Videos</p> </div>
				
					<div className="dark:bg-gray-600 font-extralight dark:text-gray-200 bg-gray-300 p-1 w-44 mt-2 rounded-md">
						<select className="bg-transparent flex focus:outline-none"name="api-verbs">
							<option value='Good'>Feeling/Activity 😊</option>
							<option value='Loved'>Feeling 💕</option>
							<option value='Angry'>Feeling 😠</option>
							<option value='Sad'>Feeling 😴</option>	
							<option value='Blessed'>Feeling 😇</option>	
							
						</select>
					</div>

				</div>

				<button className="w-full mt-4 mx-auto py-2 bg-blue-400 text-center focus:outline-none dark:text-gray-50 text-gray-800">POST</button>
			</div>
		</div>
	)
}