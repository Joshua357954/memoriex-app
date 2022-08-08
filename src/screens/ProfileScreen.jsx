import Pix from './../fonts/pix2.png'
import Pix1 from './../fonts/pix3.png'
import React,{useState,useRef} from 'react'
import UseTheme from '../hooks/useTheme.jsx'
import { useNavigate } from 'react-router-dom'
import ViewImage from '../modals/ViewImgModal.jsx'
import PostModal from '../modals/makePostModal.jsx'
import { BsFillCameraFill as Camera, BsFilePost as PostIcon } from "react-icons/bs"
import { IoMdArrowBack as ArrowBack } from 'react-icons/io'
import PostCard from '../Components/Post-Components/PostCard.jsx'
import { BiCopy , BiMessageSquareAdd as Add } from 'react-icons/bi'
import Utilities from '../components/Post-Components/Utilities.jsx'
import PostButton from '../Components/Post-Components/PostButton.jsx'
import { FaUserFriends as Friends, FaBriefcase as Work , FaClock as Joined } from 'react-icons/fa'
import { MdModeEdit as Edit, MdSchool as School, MdLocationOn as Location } from 'react-icons/md'


export default function ProfileScreen() {
	const [viewImg,setViewImg] = useState(false)
	const navigate = useNavigate()
	const username = 'Enyi Osabiya'
	const profileScroll = useRef()
	const [toggleTheme,current] = UseTheme()
	const [makePost,setMakePost] = useState(false)
	const [currentImg,setCurrentImg] = useState({name:'Profile',file:"none"})

	function openPostModal(action){
		setMakePost(action)
	}

	function openImage(action,img=""){
		setViewImg(action)
	}

	function selectImg(state){
		setCurrentImg({name:state,file:'none'})
		setViewImg(true)
	}

	const scrollbar = 'md:scrollbar md:dark:scrollbar-track-gray-600 md:dark:scrollbar-thumb-gray-600  md:dark:hover:scrollbar-thumb-gray-400 md:scrollbar-thin md:scrollbar-track-white md:scrollbar-thumb-gray-300'
	

	return (
		<div className=" h-screen w-screen flex dark:bg-gray-700 bg-gray-100 justify-center overflow-hidden items-center">
			<div className="transition-all relative h-full bg-white dark:bg-gray-800 w-full md:w-3/5">	
				
				{/* Nav Bar*/}
				<div className="flex pl-1 justify-start h-14 items-center space-x-4 md:space-x-6 dark:bg-gray-600 bg-gray-200 w-full">
					<ArrowBack className="dark:text-gray-50" onClick={()=>navigate('/')} size={25}/>
					<p className="dark:text-gray-100">{username}</p>
				</div>

				<div ref={profileScroll} className={`overflow-y-auto h-full bg-transparent w-full ${scrollbar}`}>
					
					{/* CoverPhoto Profile Img / bio*/}
					<div className="flex flex-col bg-transparent h-32 justify-center w-full items-center ">

						<div style={{backgroundImage:`url(${Pix})`,backgroundSize:'cover'}} className="mt-1 relative bg-gray-50 w-4/5 md:w-4/6 rounded-tl-md rounded-tr-md md:rounded-tr-lg md:rounded-tl-lg h-28">
							
							{/*<span className="cursor-pointer absolute bottom-3 right-3 bg-black h-7 w-7 dark:bg-white dark:bg-black flex justify-center items-center text-xl rounded-full text-white">+</span>*/}
							<span onClick={()=>selectImg("Cover Photo")} className="absolute bottom-3 right-3 p-1 rounded-full bg-black dark:bg-gray-300"> <Camera className="dark:text-black text-gray-100"/> </span>
						
							<div onClick={()=>selectImg("Profile")} className="relative h-28 w-28 border-2 absolute left-[30%] -bottom-1/2 flex justify-center items-center border-red-400 rounded-full">	
								<img src={Pix1} className="m-1 w-full h-full rounded-full" alt="Profile pix" />
								<span className="absolute bottom-2 right-1 p-1 rounded-full bg-black  dark:bg-gray-300"><Camera className="text-gray-100 dark:text-black"/> </span>
							</div>	

						</div>

					</div>

					{/* Name */}
					<div className='w-[95%] bg-transparent mt-14 dark:text-gray-100 text-center'>{username}</div>

					{/* Bio and Others  */}
					<div className="flex  flex-col justify-start items-center h-full w-full bg-transparent">	
						<div className="w-[60%] text-xs dark:text-gray-200 text-gray-700 dark:bg-gray-800 pt-2 h-20 max-h-20">
							My name is Enyiola Osabiya and am a fullstck web developer in hungray, Yay. ✅
						</div>

						{/* Utilities */}
						<div className='flex space-x-4 pt-2'>	
							<button className="flex justify-start bg-blue-500 text-gray-50 py-1 rounded-md round px-2 space-x-3 items-center"> <Add/> <p>Add Story</p></button>
					
							<button className="flex justify-start bg-blue-500 text-gray-50 py-1 rounded-md round px-2 space-x-3 items-center"> <Edit/> <p>Edit</p> </button>
							
							<button className="bg-gray-200 border-2 border-gray-300 text-xl rounded-md px-3 py-1"> <BiCopy/> </button>
						</div>	

						{/* User Info */}
						<div className="flex flex-col space-y-2 items-start text-xs pt-5 pl-3 w-full">
							<div className="flex dark:text-gray-100 text-gray-900 items-center  space-x-3"> <Work/> <p>Self-Employed</p> </div>
							<div className="flex dark:text-gray-100 text-gray-900 items-center space-x-3"> <School/> <p>Upward Int'l School</p> </div>
							<div className="flex dark:text-gray-100 text-gray-900 items-center space-x-3"> <Location/> <p>Warri, Bayelsa</p> </div>
							<div className="flex dark:text-gray-100 text-gray-900 items-center space-x-3"> <Joined/> <p>12 August 2022</p> </div>
						</div>
				
						{/* Friends / Memoriex */}
						<div className="flex w-full justify-between px-3 mt-3"> 
							<div className="flex space-x-3">
								<Friends className="dark:text-gray-100"/> 
								<p className="text-sm text-gray-900 dark:text-gray-100">Friends (248)</p> 
							</div>
							<span className="text-xs text-blue-500 dark:text-blue-600">see all</span>
						</div>

						{/* Post Button */}
						<div className="w-full bg-transparent mt-3">	
							<PostButton createPost={openPostModal}/>
						</div>	

						{/* Posts */}

						<div className="flex justify-center items-center space-x-2 bg-gray-100 dark:bg-gray-600 dark:text-gray-200 w-28 py-2 px-2 rounded-md my-2"> 
							<p>All Posts</p> <PostIcon/> 
						</div> 		

						<div className="w-full mt-2">
							
							<PostCard  />
							<PostCard text="hi"/>
							<PostCard />
							<PostCard />
							<PostCard />
							<PostCard />
							{/* Filler Div (Lapsys) */}
							<div className="w-full bg-transparent h-16"></div>
						</div>
					</div>

				</div>

			{/* Make New Post Modal On Profile Screen */}
			{ makePost ?
				<PostModal PREF={profileScroll} action={openPostModal} /> : ""
			}

			{/* Modal For Viewing Images */}
			{
				viewImg ?
					<div className='absolute top-0 left-0 bottom-0 right-0 bg-black'>
						<ViewImage showImage={openImage} image={currentImg}  />
					</div> : ""	
			}	

			</div>	

		</div>
	)
}