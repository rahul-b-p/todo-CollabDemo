import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
function App() {

  return (
    <>
      <Header/>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
