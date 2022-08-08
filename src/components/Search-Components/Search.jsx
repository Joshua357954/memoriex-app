import React, {useState,useEffect} from 'react'
import SearchCard from './SearchCard.jsx'
import { MdClose as Close } from 'react-icons/md'
import { BiArrowBack as Back, BiSearch as SearchIcon}  from 'react-icons/bi'
import { BsTrashFill as Trash } from 'react-icons/bs'

export default function Search({onSearch}) {
	const clr = "text-3xl"
	const goBack = () => onSearch(false)
	const [breakPoint,setbreakPoint] = useState(window.innerWidth)
	const scrollbar = `${window.innerWidth>400 ? 'scrollbar scrollbar-thin dark:scrollbar-track-gray-600 cursor-pointer  dark:hover:scrollbar-thumb-gray-500 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-400': ""} `
	
	useEffect(() => {
		window.addEventListener('resize',()=>setbreakPoint(window.innerWidth))
		console.log(breakPoint);
	}, [window.innerWidth])

	return (
		<div  className="flex justify-start absolute top-0 right-0 left-0 bottom-0 h-screen bg-transparent w-screen ">
			<div className={`flex flex-col h-full dark:bg-gray-800 ${window.innerWidth<400 ? 'w-[100vw]':'w-[40vw]'} bg-gray-50 `}>	
				<div className="flex justify-between items-center px-1 bg-transparent dark:border-b-gray-100  border-b-2 border-b-gray-600 w-full">
					{ window.innerWidth<450 ? <Back size={30} className="dark:text-gray-50 "  onClick={goBack}/> : <Close size={30} className="dark:text-gray-50 " onClick={goBack}/> }
					
					<div className="flex  p-1 justify-between bg-transparent py-2 w-full items-center">
						<input type='search' name="search" 
						 placeholder="Search ..." autoComplete="off"
						 className="w-full bg-transparent px-2 dark:text-gray-50 text-lg py-2 outline-none focus:outline-none"  />	
					</div>	

					<SearchIcon  className="dark:text-gray-50 " size={30}/>
				</div>	

				<div className={`transition-all w-full h-full pt-2 ${scrollbar} overflow-y-auto`} >	
					<SearchCard name="Daniel" bio="My People happy :) " img="ko" />
					<SearchCard name="Samuel" bio="My People happy :) " img="" />
					<SearchCard name="Jenny" bio="My People happy :) " img="ko" />
					<SearchCard name="Korupe" bio="My People happy :) " img="" />
					<SearchCard name="Billey" bio="My People happy :) " img="ko" />
					<SearchCard name="Xamarine" bio="My People happy :) " img="ko" />
					<SearchCard name="apena" bio="My People happy :) " img="ko" />
					<SearchCard name="Rubika" bio="My People happy :) " img="" />
					<SearchCard name="Pokuli" bio="My People happy :) " img="ko" />
					<SearchCard name="Werty" bio="My People happy :) " img="" />
					<SearchCard name="Yaqqer" bio="My People happy :) " img="ko" />
				</div>

			</div>
		</div>
	)
}