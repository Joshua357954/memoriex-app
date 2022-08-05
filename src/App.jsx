import './index.css'
import React from 'react'
import { useState, useContext } from 'react'
import LogRegScreen from './screens/LogReg.jsx'
import ChatScreen from './screens/ChatScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProtectLogin from './utils/ProtectLogin.jsx'
import LockScreen from './modals/LockScreenModal.jsx'
import AllAccountScreen from './screens/Accounts.jsx'
import { LockApp } from './context/lockChatContext.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const {chatLock} = useContext(LockApp)

  if ( chatLock )
    return <LockScreen />

  return (
      <BrowserRouter>
        
        <Routes>


          <Route path="/Login" element={<LogRegScreen/>} />

          <Route path="/" exact element={<HomeScreen/>} />

          <Route path="/home" exact element={<HomeScreen/>} />

          <Route path="/Profile"  element={<ProfileScreen/>} />

          <Route path="/Chat"  element={<ChatScreen/>} />

         <Route path="/Accounts"  element={<AllAccountScreen/>} />

        </Routes>

      </BrowserRouter>
   )
}

export default App


// npm i --save @emoji-mart/data axios emoji-mart emoji-picker-react react-icons react-redux react-router-dom react-toastify redux redux-thunk redux-toolkit socket.io-client styled-components
 