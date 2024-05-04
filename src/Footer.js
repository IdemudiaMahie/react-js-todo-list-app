import React from 'react'

const Footer = ({ list }) => {
  return (
    <footer>
        {
            list.length === 0
                ? null 
                : <p style={{color: 'green'}}>You have {list.length} {list.length === 1 ? 'task' : 'tasks'} saved in your list.</p>
        }
    </footer>
  )
}

export default Footer