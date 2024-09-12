import React from 'react'
import { useState } from 'react'

function List() {

  const [list, setList] = useState([]);  
  const [count, setCount] = useState(1);

  function addItem() {
     const itemName = "item " + count;
     setList((preState) => { return [...preState, itemName]}); 
     setCount((preState) => {return preState + 1});
  }
  console.log("current state: " + list);
  
  return (
    <>
    <h2>List</h2>
    <ul>
     { 
       list.map((el, index)=> <li key={index}>{el}</li>)
     }
    </ul>
    
     <br />
     <button onClick={addItem}>add item</button>
    </>
  )
}

export default List