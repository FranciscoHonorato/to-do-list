import React, { useContext, useState } from "react"
import './Task.css'
import { AppContext } from "../App"

import { MdDelete } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";



function Task({ item, editItem, removeItem }) {

  const { setList, list } = useContext(AppContext)


  function handleCheck(item) {
    const index = list.indexOf(item)
    const checkItem = item
    
    checkItem.checked = !checkItem.checked

    list[index] = checkItem

    setList([...list])
    localStorage.setItem('DoList', JSON.stringify(list))

  }

  return (
    <>
      <div className="task">
        <div >
          <input className="check" onChange={() => handleCheck(item)} type='checkbox' checked={item.checked} ></input> 
         
        </div>
        <div className="content">
          {item.checked ? <s>{item.nome} </s> : <p>{item.nome}</p> }
        </div>
        <div className="btn">
          <button className="edit" onClick={() => editItem(item)}> <RiEditLine /></button>
          <button onClick={() => removeItem(item.id)}> <MdDelete /> </button>
        </div>
      </div>
    </>
  )
}
export default Task