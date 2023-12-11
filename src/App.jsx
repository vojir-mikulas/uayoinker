import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {toast, Toaster} from "react-hot-toast";

function App() {

    const handleCopyText = (e) =>{

        const userAgentEl = e.currentTarget;

        navigator.clipboard.writeText(userAgentEl.textContent);

        toast.success('Copied to clipboard.')
    }
  return (
    <>
    <Toaster/>
    <h1>Your userAgent is:</h1>
        <span onClick={(e)=>handleCopyText(e)}>{navigator.userAgent}</span>
    </>
  )
}

export default App
