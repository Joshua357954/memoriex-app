import React from 'react'
import Pix0 from '../../fonts/pix1.png'
import PPix from '../../fonts/pix3.png'
import { useNavigate } from 'react-router-dom' 
import { FcLike as Love } from 'react-icons/fc'
import { AiFillLike as Like } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../service/userService.js'
import { updatePosts } from '../../features/postSlice.js'
import { RiShareForwardLine as Share} from 'react-icons/ri'
import { ViewPost } from '../../context/showPostContext.jsx'
import { useState, useEffect, useRef, useContext } from 'react'
import { HiEmojiHappy as Happy, HiEmojiSad as Sad } from 'react-icons/hi'
import { reactOnThePost, updateReactionOnPost,deletePost } from '../../service/postService.js'
import { FaThumbsUp as Like3 , FaRegThumbsUp as Like2 } from 'react-icons/fa'
import { BsChat as Comment ,BsEmojiHeartEyesFill as Loves } from 'react-icons/bs'
import { BsEmojiLaughingFill as Laugh, BsEmojiAngryFill as Angry, BsTrashFill as Trash } from 'react-icons/bs'


export default function PostCard({FullView,PCRef,toggleViewPost,
							PostId, userId,text,postUserId, comments,
								imgUrl ,time,feeling ,link, reactions }) {
	
	const navigate = useNavigate()
	const [ownerName,setOwnerName] = useState("")
	const { userPost } = useSelector( state => state.post)

	useEffect(()=> {
		async function pickUser(){
			const DUser = await getUser(postUserId)
			setOwnerName(DUser?.username|| "No User")
		}
		pickUser()
		// console.log("Check paka el  : ",userPost)

	},[postUserId])


	let scrollTop = ""
	const dispatch = useDispatch()
	const scrollRef = useRef(null)
	
	const [openReactions,setOpenReactions] = useState(false)
	const {fullPostData,setFullPostData} = useContext(ViewPost)
	const [postReactionCount,setPostReactionCount] = useState(reactions?.length)
	const [commentCount,setCommentCount] = useState(comments?.length)
	

	const lockScroll = () => {
		console.log("Scrolling : ",scrollTop)
		PCRef.current.scrollTo(0,scrollTop)
	}

	const openUserProfile = () => {
		return navigate(`/profile/${ownerName || postUserId}`)
	}


	//  Close reaction Box or OpenPost
	const CloseReactionBox_OpenPost = () => {
		if(openReactions){
			setOpenReactions(false)
			PCRef.current.onscroll = "Empty The Function"
		}else{
			if(!FullView){
				setFullPostData({ownerName, PostId, userId,text,postUserId,imgUrl ,time,
								feeling , reactions,comments })
				return toggleViewPost(true)
			}
		}
	}

	const myOwn = () =>  userId === postUserId

	function getFeeling(type){
		const feelingIcon = {"Loved":'????',"Angry":'????',"Sad":'????', "Blessed":'????'}
		if(type){
			return 	` ${feelingIcon[type]} Feeling ${type} `
		}
		return 'Shared a Post'
	}


	const showReactions = () => {
		setOpenReactions(true)
		scrollTop = PCRef.current.scrollTop
		PCRef.current.onscroll = lockScroll
	}

	async function handleReaction(type,update) {
		const postReactionData = { PostId, reactionUser:userId, reaction:type }
		let APR = ""
		try{
			if (update){
				const updateReaction = updateReactionOnPost(postReactionData)
				APR = await updateReaction 

			}else{
				const makeReaction = reactOnThePost(postReactionData)
				console.log("From Poster : ", await makeReaction)
				APR = await makeReaction
			}	

			setPostReactionCount(APR?.count) 		
		}catch(error){
			console.log("Error While Reacting to Post : ",error)
		}
	}


	async function deleteIt () { 
		//  update local state 
		const Updated = userPost.filter((post) => post.id != PostId)
		console.log("Post Don Update : ",Updated)
		dispatch(updatePosts(Updated))
		//  Delete from database  
		console.log( await deletePost(postUserId,PostId))
	}

	return (  
		<div ref={scrollRef} className="w-full max-h-[550px] transition-all  md:max-h-[560px] dark:text-gray-50 bg-white border-1 border-t-gray-300 shadow-md mb-3 relative"> 
			
			{/* Top Post Bar */}
			<div className="flex  dark:bg-gray-800 px-1 border-1 border-b-blue-300 pt-1 flex-row items-center relative">
				
				<div onClick={openUserProfile} className="w-10 h-10 flex justify-center items-center rounded-full p-1 border-2 border-red-300">
					<img src={Pix0} alt="" className="w-full  " />
				</div>

				<div className="cursor-default ml-2">
					<p onClick={openUserProfile} className="text-sm">{ownerName} &nbsp;{getFeeling(feeling)}</p>
					<p className="text-xs font-light">12 Jun 2022</p>
				</div>

				<div className='absolute top-1 right-2'>{!FullView && myOwn() ? <Trash onClick={deleteIt} className="p-1 dark:text-gray-100 bg-gray-200 rounded-md dark:bg-gray-500 text-xl text-gray-900 hover:text-red-500 dark:hover:text-red-500"/> : "" }</div>
			</div>
			

			{/* 2nd Post Section */}
			{ text ?
			<div className="cursor-default w-full pb-1 pt-2 text-sm font-extralight dark:bg-gray-800 px-1">
				<p onClick={CloseReactionBox_OpenPost}> {text} </p>
			</div> : ''}
			

			{/* 3rd Section */}
			{ imgUrl ?
			<div className="w-full  dark:bg-gray-800 flex justify-center flex-col items-center">
				<img src={imgUrl} alt="post-pix" className={`w-[95%] max-h-[380px] h-[400px] object-cover ${FullView ? "object-contain" : "" }`} onClick={CloseReactionBox_OpenPost}/>
				<p className="pl-1 text-sm font-extralight h-10">&#128151; &#128516; &#128524; You and 24 Others</p>
			</div> : "" }
			

			{/* Utils Section*/}
			<div className="flex select-none cursor-pointer dark:bg-gray-800 justify-between p-2">
				<div onClick={()=> handleReaction('Like',false)} onDoubleClick={showReactions} className="text-blue-500 px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100 flex justify-between items-center space-x-2"><Like/>{postReactionCount}</div>
				<div onClick={()=> CloseReactionBox_OpenPost()} className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100 flex items-center justify-between"><Comment className="text-xl pr-1"/>{commentCount}</div>
				<div className="px-4 py-2 rounded-md dark:bg-gray-600 bg-gray-100"><Share/></div>
			</div>


			{ openReactions ? 
				
				<div className="flex justify-around items-center absolute  rounded-md border-2 dark:border-gray-400 border-gray-200 dark:bg-gray-600 bg-gray-50 h-24 right-10 bottom-14 left-10">	
					<div onClick={()=> handleReaction('Like',true)} className="bg-blue-500 p-2 rounded-full text-white"> <Like/></div>
					<div onClick={()=> handleReaction('Love',true)} className="bg-red-500 p-2 rounded-full text-white"> <Loves/></div>
					<div onClick={()=> handleReaction('Happy',true)} className="bg-yellow-400 p-2 rounded-full text-white"> <Happy/></div>
					<div onClick={()=> handleReaction('Sad',true)} className="bg-pink-500 p-2 rounded-full text-white"> <Sad/></div>
					<div onClick={()=> handleReaction('Angry',true)} className="bg-orange-500 p-2 rounded-full text-white"> <Angry/></div>

				</div> : "" 
			}
			

		</div>
	)
	
}

