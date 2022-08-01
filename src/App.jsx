import React from 'react'
import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogRegScreen from './screens/LogReg.jsx'
import ChatScreen from './screens/ChatScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import ProtectLogin from './utils/ProtectLogin.jsx'

function App() {
  return (
      <BrowserRouter>
        
        <Routes>


          <Route path="/Login" element={<LogRegScreen/>} />

          <Route path="/" exact element={<HomeScreen/>} />

          <Route path="/home" exact element={<HomeScreen/>} />


          <Route path="/Chat"  element={<ChatScreen/>} />


        </Routes>

      </BrowserRouter>
   )
}

export default App


// npm i --save @emoji-mart/data axios emoji-mart emoji-picker-react react-icons react-redux react-router-dom react-toastify redux redux-thunk redux-toolkit socket.io-client styled-components
 