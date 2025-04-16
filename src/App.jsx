
import './App.css'
import {Button, ClickCounter } from "./components"
import UserProvider from './context/userContext'
import LoginPage from './views/LoginPage'

function App() {
  

  return (
    <UserProvider>
    <>
      <LoginPage />
    </>
    </UserProvider>
  )
}

export default App
