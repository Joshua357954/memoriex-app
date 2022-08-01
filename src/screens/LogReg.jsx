import '../index.css'
import '../style.css'
import React from 'react'
import { useState,useContext } from 'react'
import useAuth  from "../hooks/useAuth.jsx"
import { useNavigate } from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage.jsx"
import { registerUser, userLogin } from "../api/authAPI.js"
 

export default function LogReg() {

	const [msg,setMsg]=useState()
	const navigate = useNavigate()
	const [email,setEmail]=useState("")
	const [username,setUsername]=useState("")
	const [password,setPassword]=useState("")
	const [setStore]= useLocalStorage("memoriex")
	const [currentUser, setCurrentUser] = useAuth()
	const [loginState,setLoginState]=useState(false)	

	const len=(val)=>(val.length)

	async function handleSubmit(event){
		event.preventDefault()
		if (username && email && password && len(email)<4  || len(username)<3 || len(password)<4)
			return console.log("Pls Fill The Fields Correctly")

		if (loginState===true){
			const regInfo=await registerUser(username,email,password)
			console.log(regInfo)
			setLoginState(false)

		}else{
			const loginInfo=await userLogin(username,password)
			console.log(loginInfo)
			const newUser=loginInfo.response 
			setCurrentUser(newUser) 
			setStore(newUser)
			loginInfo.status ? navigate('/') : setMsg({type:"error",message:newUser})
		}
	}

	return (

		<div className="logreg-form">
			{/* For testing Purpose */}
			<span className="text-center ctext-blue-300">{msg?.message}</span>

			<h2>Memoriex</h2>

			<div className="log-reg-box">
				<button className={loginState ? 'logreg-Btn' :'logreg-Btn-active'}
					onClick={()=>setLoginState(false)}>Login</button>

				<button className={!loginState ? 'logreg-Btn' :'logreg-Btn-active'}
					onClick={()=>setLoginState(true)}>Register</button>
			</div>

			<form action="" onSubmit={handleSubmit}>

				<input name="username" id="Olabo"
					value={username}
					onChange={(e)=>setUsername(e.target.value)} 
					autoComplete='off'
					placeholder="Username"
					type="name"
					onFocus={({target})=>console.log(target.name)} />
				
				{ loginState ?
					<input name="email" value={email} 
						onChange={(e)=>setEmail(e.target.value)}
						autoComplete='off'
						placeholder="Email"
					/> : ""
				}
				
				<input name="password" 
					value={password} 
					onChange={(e)=>setPassword(e.target.value)}
					placeholder="Password"
					autoComplete='off'
					type="password"
					/>
				
				<button className="--submit" type="submit">{!loginState ? "Login" : "Register"}</button>
			</form>

			<p className="copyright"> Copyright 2022 Memoriex </p>
		</div>

		)
	
}