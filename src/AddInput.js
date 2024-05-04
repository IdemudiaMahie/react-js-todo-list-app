import React, {useRef} from 'react'

const AddInput = ({ handleAddTask, inputValue, setInputValue }) => {
    const refInput = useRef()
  return (
    <form onSubmit={(e)=>handleAddTask(e)}>
        <label htmlFor="inputArea">Input a Task</label>
        <input 
          type="text" 
          placeholder="Input Task" 
          id="inputArea" 
          autoFocus 
          value={inputValue} 
          onChange={(e)=>setInputValue(e.target.value)} 
          ref={refInput}
        />
        <button type="submit" onClick={()=>refInput.current.focus()}>Add</button>
    </form>
  )
}

export default AddInput