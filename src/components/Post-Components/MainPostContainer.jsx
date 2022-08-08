import React from 'react'
import PostButton from './PostButton.jsx'
import PostCard from './PostCard.jsx'
import PostModal from '../../modals/makePostModal.jsx'
import StoryContainer from '../Story-Components/StoryContainer.jsx'
import {BsFileRichtextFill as Text1, BsTextareaT as Text} from 'react-icons/bs'
import { useState, useEffect, useRef, useContext } from 'react'
import {NavHide} from '../../context/hideNavContext.jsx'

export default function MainPostContainer({toggleViewStoryBox,toggleAddStory}) {
	const MyPosts = [1,2,2]
	const contRef = useRef(null)
	const {setHideNav} = useContext(NavHide)
	const [breakPoint,setbreakPoint] = useState(window.innerWidth)
	const [showPostModal,setShowPostModal] = useState(false)
	

	function openPostModal(action){
		setHideNav(true)
		setShowPostModal(action)
	}

	useEffect(() => {
		window.addEventListener('resize',()=>setbreakPoint(window.innerWidth))
	}, [window.innerWidth])

	return (

		<div ref={contRef} className={`relative transition-all col-span-6 md:col-span-4 lg:col-span-3 dark:bg-gray-900 bg-gray-50 overflow-y-auto ${window.innerWidth>400 ? 'scrollbar scrollbar-thin dark:scrollbar-track-gray-600  dark:hover:scrollbar-thumb-gray-500 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400':''}`}>
			<div className={`${breakPoint > 400 && breakPoint < 505 || breakPoint > 640 ? 'w-[85%]':''} dark:bg-gray-800 bg-white mx-auto `}>

				<PostButton createPost={openPostModal} />

				<StoryContainer action1={toggleAddStory} action2={toggleViewStoryBox}/>

				{
					MyPosts.map(
						(post,idx) => <PostCard PCRef={contRef} text={`${idx==1?"H":''}`} key={idx} />
					)
				}

			</div>
			{ showPostModal ?
				<PostModal PREF={contRef } action={openPostModal}/> : ""
			}
		</div>
	)
}