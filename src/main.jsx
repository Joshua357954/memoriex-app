import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContext from './context/userContext.jsx'
import MobileChat from './context/mobileChatState.jsx'
import NavHidden from './context/hideNavContext.jsx'
import ChatRecipient from './context/recipientContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<NavHidden>
		<ChatRecipient>
			<MobileChat>
				<UserContext>   
					<App />
				</UserContext>
			</MobileChat>
    	</ChatRecipient>	
	</NavHidden>

)
