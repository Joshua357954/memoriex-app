import React from 'react'
// import Pix0 from '../../fonts/pix1.png'
// import { IoEnter } from 'react-icons/io'
import { FaLockOpen as Enter1 } from 'react-icons/fa'
import { FiDelete as Delete } from 'react-icons/fi'
import { MdLockOpen as Enter } from 'react-icons/md'
import Pix from '../fonts/pix3.png'
import {useState, useEffect, useContext, useCallback} from 'react'
import { LockApp } from '../context/lockChatContext.jsx'

export default function LockScreenModal() {
	const pass_code_length = 5
	const username = "Kemo Dolxx"
	const fakeItems= [1,1,1,1,1]
	const [passCode,setPassCode] = useState('')
	const store_name = 'memoriex-chat-lock-state'
	const code_store = 'memoriex-chat-code'
	const {chatLock,setChatLock} = useContext(LockApp)
	const numbs = [[1,2,3],[4,5,6],[7,8,9],['X',0,'Del']]


	function getIcon(ico){
		switch(ico){
			case 'X':
				return <Delete onClick={DeleteCode}/>
			case 'Del':
				return <Enter onClick={unlock}/>
			default:
				return ico
		}
	}

	const clickBtn = useCallback((item) => {
		if (item=="X" || item=="Del")
			return 
		else if(passCode.length>=pass_code_length){
			unlock()
			return setPassCode('')
		}
		setPassCode(`${passCode}${item}`)
	})


	//  Use KeyBoard
	window.document.body.onkeypress= useKeyboard

	function useKeyboard(e){
		const KEY = e.key
		if(!isNaN(KEY) && e.code!='Space'){
			clickBtn(KEY)
		}
	}


	function DeleteCode (){
		console.log(passCode)
		let currentCode=passCode.slice(0,-1)
		setPassCode(currentCode)
	}


	function unlock(){
		const CODE_FROM_STORE = localStorage.getItem(code_store) || ''
		console.log(CODE_FROM_STORE,passCode)
		if (passCode && passCode == CODE_FROM_STORE){
			setChatLock(false)
			window.onkeypress = {}
			localStorage.setItem(store_name,'false') 
		}	
		 
	}


	return (
		<div className="flex select-none justify-center items-center dark:bg-gray-800 bg-gray-50 h-screen w-screen">
			<div className="w-full flex flex-col justify-center space-y-5 items-center bg-red-400 h-full md:w-[40vw] lg:[50vw]">
				<div className="flex flex-col items-center justify-between">
					<div className="rounded-full h-24 w-24 ">
						<img src={Pix} className="w-full h-full rounded-full" alt=""/>
					</div>
					<p className="mt-2">{username}</p>
				</div>

				<div className="flex w-full justify-center space-x-4 my-2 md:my-3">
					{
						fakeItems.map((it,idx)=><div key={idx} className={`${passCode[idx]?'bg-gray-800':'bg-gray-100'} w-4 h-4 rounded-full`}></div>)
					}
				</div>
				
				<div className="w-full bg-transparent text-2xl flex flex-col space-y-4">
					{
						numbs.map((box,idx)=> {
							return (<div key={idx} className='flex justify-around'>
										{box.map((item,idx)=>{
										return <button onClick={()=>clickBtn(item)} className="flex justify-center items-center focus:outline-none rounded-full h-12 w-12 text-gray-800 hover:bg-gray-200 bg-gray-100" key={idx}> {getIcon(item)} </button>
									})}
								</div>)
						} )
					}
				</div>

				<button className="bg-transparent focus:outline-none font-bold text-sm text-blue-400 pt-5 rounded-lg p-2"> Forgotten Code </button>
			</div>
		</div>
	)
}