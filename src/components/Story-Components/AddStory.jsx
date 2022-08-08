
import React from 'react'
import { useContext } from 'react'
import Pix0 from '../../fonts/pix2.png'
import { MdClose as Close } from 'react-icons/md'
import { ViewStory } from '../../context/showStoryContext.jsx'

export default function AddStory({toggleAddStory}) {

	function closeAddStory(){
		toggleAddStory(false)
	}

	return (
		<div  className="flex justify-center items-center w-full h-full bg-pink-600">
			<div className="flex flex-col justify-start items-center h-full bg-gray-50 w-full md:w-2/3 lg:w-3/6">
				
				{/* Navigation*/}
				<div className="flex shadow-md justify-between h-14 w-full items-center px-2">
					<Close onClick={closeAddStory} className="px-2 text-4xl rounded-md bg-gray-200 shadow-sm hover:shadow-md"/> 
					<h1>Create Story</h1>
					<div>{"   "}</div>
				</div>

				{/* Image */}
				<div className="rounded-md bg-gray-300 w-[60%] h-[55%] mt-2">	
					<img className="rounded-md bg-cover w-full h-full" src={Pix0} alt="Photo To Change" />
				</div>

				{/* Text Box */}
				<div className="h-16 my-3 w-[60%]">
					<input placeholder="Tell Us that Story ."
					className="w-full rounded-sm border-none h-full focus:outline-none outline none border-2 border-gray-300"  name="" id="" />
				</div>

				{/* Post Button */}
				<button className="mb-2 rounded-md shadow-sm bg-orange-300 text-center capitalize w-[70%] py-2">
					Post Story
				</button>

			</div>
		</div>
	)
}