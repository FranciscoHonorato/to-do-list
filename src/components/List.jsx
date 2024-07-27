import React, { useContext } from "react"
import { AppContext } from "../App"
import Task from './Task'

function List({list}) {

  const { setItem, setList, setAux } = useContext(AppContext)

  function removeItem(id) {
    const removeList = list.filter((element) => element.id !== id)
    setList(removeList)

  }

  function editItem(item) {
    const index = list.indexOf(item)

    setItem({ nome: item.nome ,edit:true })
    setAux(index)

  }


  return (
    <>
      {list.length === 0 && "lista vasia!"}
      {list.map((item, key) =>
        <Task key={key} item={item} editItem={editItem} removeItem={removeItem} />
      )}
    </>
  )
}

export default List

