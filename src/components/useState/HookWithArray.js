import React, { useState } from 'react'

function HookWithArray() {
    const [items,SetItems] = useState([])
    const addItem = () =>{
    SetItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])
    }
  return (
    <div>
     <button onClick={addItem}>Add a number</button>
     <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
     </ul>
     <h5>{JSON.stringify(items)}</h5>
    </div>
  )
}

export default HookWithArray