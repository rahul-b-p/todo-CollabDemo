import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
function App() {

  return (
    <>
      <Header/>
      <AddTodo/>
    </>
  )
}

export default App
