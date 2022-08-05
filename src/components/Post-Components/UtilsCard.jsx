import React from 'react'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'

export default function UtilsCard({icon,name,action,to}) {
	const navigate = useNavigate()
	return (
		<div onClick={()=>navigate(to)} className="flex space-x-3 items-center" onClick={()=> console.log("Haba")}>
			{icon}<p className="dark:text-gray-100 text-gray-800">{name}</p>
		</div>
	)
}