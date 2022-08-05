import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserContext from './context/userContext.jsx'
import NavHidden from './context/hideNavContext.jsx'
import MobileChat from './context/mobileChatState.jsx'
import LockChat from './context/lockChatContext.jsx'
import ChatRecipient from './context/recipientContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<LockChat>
		<NavHidden>
			<ChatRecipient>
				<MobileChat>
					<UserContext>   
						<App />
					</UserContext>
				</MobileChat>
	    	</ChatRecipient>	
		</NavHidden>
	</LockChat>
)
