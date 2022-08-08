import '../style.css'
import React from 'react'
import { useState } from 'react'
import Pix2 from './../fonts/pix3.png'
import Pix5 from './../fonts/pix2.png'
import { MdOutlineFileDownload as Download, MdClose as Close } from 'react-icons/md'


export default function ViewImgModal({showImage,image}) {
	const [myImg,setmyImg] = useState(null)
	const chooseImg = (e) => {
		console.log(e)
		alert(e.target.files[0].name)
	
	}

	return (
		<div className='w-full h-full bg-white dark:bg-gray-900'>

			{/* Navigation */}
			<div className="select-none  flex justify-between px-2 items-center h-16 bg-gray-200 dark:bg-gray-600 w-full" >
				<div className="flex pl-1 cursor-pointer space-x-3 items-center">	
					<Close onClick={()=>showImage(false)} className="dark:text-white"  size={20} />
					<h1 className="text-md dark:text-gray-50 text-gray-900">{image.name}</h1>
				</div>

				<div  className="flex space-x-3 cursor-pointer items-center">

					{ myImg ?
						<button className="bg-red-400 text-white px-2 focus:outline-none">Save</button>
					:  <div className="text-2xl bg-gray-300 p-2 rounded-md"><Download/></div>}	

					<div  className="w-20 bg-blue-400 p-2 mr-2 rounded-sm relative flex justify-center text-center text-white">Change
						<input className="w-20 absolute top-0 opacity-0 bottom-0 right-0"
						type="file" onChange={chooseImg}  />
					</div>

				</div>
			</div>

			<div className="w-full h-full flex justify-center ">	
				<img src={Pix2} className="rounded-sm h-[70%] w-full md:w-[80%] bg-cover border-b-2 border-gray-400" alt="" />
			</div>
			
		</div>
	)
}