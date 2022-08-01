import React from 'react'
import PropTypes from 'prop-types'

export default function UtilsCard({icon,name,action}) {
	return (
		<div className="flex space-x-3 items-center" onClick={()=> console.log("Haba")}>
			{icon}<p className="dark:text-gray-100 text-gray-800">{name}</p>
		</div>
	)
}