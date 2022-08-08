import React from 'react'
import Pix0 from '../../fonts/pix1.png'
import StoryCard from './StoryCard.jsx'

export default function StoryContainer({action1,action2}) {

	function createStory() {
		action1(true)
	}

	return (
			<div className={`${window.innerWidth>400 ? 'scrollbar dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600  dark:hover:scrollbar-thumb-gray-400 scrollbar-thin pb-3 scrollbar-track-white scrollbar-thumb-gray-200':''} flex h-32 dark:bg-gray-900 bg-white border-1 border-black w-full p-1 overflow-x-auto`}>
			
				<div onClick={createStory} className="h-full w-16 bg-gray-800 rounded-md mr-1 flex-shrink-0">
					<img src={Pix0} alt="profile pix"className='h-[65%] w-full' />
					<div className="bg-gray-500 text-[9px] p-[2px] font-light h-[35%] rounded-b-md pt-1 text-center text-white w-full"> Add to Story </div>
				</div>

				<StoryCard action2={action2} name="Uzoma" img="" />
				<StoryCard action2={action2} name="Emma" img="" />
				<StoryCard action2={action2} name="Daniel" img="" />
				<StoryCard action2={action2} name="Marble" img="" />
				<StoryCard action2={action2} name="Jack" img="" />
				<StoryCard action2={action2} name="Clinton" img="" />
				<StoryCard action2={action2} name="John" img="" />
				<StoryCard action2={action2} name="James" img="" />
				<StoryCard action2={action2} name="Glad" img="" />

			</div>
	)
}