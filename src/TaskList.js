import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const TaskList = ({ list, handleDelete, handleCheck, handleEnterButtonDelete }) => {
  return (
    <ul>
        {
            list.length ? 
                list.map((item)=>(
                    <li key={item.id}>
                        <input 
                            type="checkbox" 
                            onChange={()=> handleCheck(item.id)} 
                            checked={item.completed} 
                            aria-label={`${item.task} is ${item.completed ? 'completed' : 'uncompleted'}.`}
                        />
                        <span>{item.task}</span>
                        <FaTrashAlt 
                            role='button' 
                            tabIndex='0' 
                            aria-label={`Delete ${item.task}`}
                            onClick={()=>handleDelete(item.id)} 
                            onKeyDown={(e)=> handleEnterButtonDelete(e, item.id)}
                        />
                    </li>
                ))
                : <p style={{color: 'red'}}>Baba! You neva save anything ooo!!!</p>
        }
    </ul>
  )
}

export default TaskList