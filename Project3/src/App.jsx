import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import TodoApp from "./components/TodoApp/TodoApp.jsx";
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Todo App"
  }, [])

  return (
    <>
    <div className ='cantaner'>
   <TodoApp />
   </div>
    </>
  )
}

export default App
