import React from 'react'
import Pix5 from './../fonts/pix2.png'


export default function Accounts() {
	const acct = [0,0,0]
	const username = 'Kiranna'
	return (
		<div  className="flex overflow-y-scroll justify-center items-center h-screen w-scren">
			<div className="flex flex-col justify-evenly items-center h-full w-full ">	
				<h1 className="text-2xl text-gray-900 md:text-3xl text-center">Choose Account</h1>

				<div className="h-[40vh] md:h-3/6 w-2/3 md:w-3/6 bg-transparent">

				{	acct.map((item)=>{
						return <div className="w-full rounded-sm px-2 py-1 mb-1 space-x-4 bg-gray-100 flex justify-start items-center">	
								<img className="bg-white w-14 h-14 rounded-md" src={Pix5} alt="Ac Icon" />
								<p className="text-md">{username}</p>
							</div>			
				})	}

				</div>

				<div className="flex flex-col  space-y-2 w-full items-center">
					<button className="bg-green-300 py-2 w-2/6 rounded-sm ">Login</button>
					<span className='text-xm underline font-bold text-gray-600 lg:text-sm'>SignUp</span>
				</div>

			</div>
		</div>
	)
}