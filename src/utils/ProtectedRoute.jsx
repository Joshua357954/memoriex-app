import React from 'react'
import { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'

export default function ProtectedRoute() {

const [currentUser, setCurrentUser]= useAuth()

const navigate=useNavigate()

	useEffect(() => {
		if (!currentUser)
			navigate('/Login')
	}, [])



	return <Outlet/>


		

	// return < h1 className="p-5 font-medium text-2xl text-center text-red-200 bg-sky"> Pls Your Are Not Allowed Login or Register to continue.. </h1>

	
}