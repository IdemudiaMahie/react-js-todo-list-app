import React, { useState } from "react";
import AddInput from "./AddInput";
import TaskList from "./TaskList";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(JSON.parse(localStorage.getItem('savedTask')) || [])

  const handleCreateObject = (taskInput) => {
    if (!taskInput) {
      return 
    } else {
      const newTask = {
        id: Math.random(),
        task: taskInput, 
        completed: false
      }
      setList([...list, newTask])
      localStorage.setItem('savedTask', JSON.stringify([...list, newTask]))
    }
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    handleCreateObject(inputValue.trim())
    setInputValue('')
  }

  const handleDelete = (id) => {
    const newList = list.filter((item)=> id !== item.id)
    setList(newList)
    localStorage.setItem('savedTask', JSON.stringify(newList))
  }

  const handleCheck = (id) => {
    const newList = list.map((item) => item.id === id ? {...item, completed: !item.completed} : item)
    setList(newList)
    localStorage.setItem('savedTask', JSON.stringify(newList))
  }

  const handleEnterButtonDelete = (e, id) => e.key === 'Enter' ? handleDelete(id) : null
  
  return (
    <div className="App">
      <Header />
      <AddInput 
        handleAddTask={handleAddTask} 
        inputValue={inputValue} 
        setInputValue={setInputValue}
      />
      <TaskList 
        list={list} 
        handleDelete={handleDelete} 
        handleCheck={handleCheck} 
        handleEnterButtonDelete={handleEnterButtonDelete}
      />
      <Footer list={list} />
    </div>
  );
}

export default App;
