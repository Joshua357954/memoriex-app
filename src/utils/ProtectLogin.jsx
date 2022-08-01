import React from 'react'
import { useEffect,useContext } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth.jsx'


export default function ProtectLogin() {

const [currentUser, setCurrentUser]= useAuth()

const navigate=useNavigate()

	useEffect(() => {
		if (currentUser)
			navigate('/Post') 
	}, [])

	return <Outlet/>

}