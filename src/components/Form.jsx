
import React, { useContext } from "react"
import { AppContext } from "../App"
import './Form.css'


function Form({ titulo }) {

    const { item, setItem, list, setList, aux } = useContext(AppContext)

    function addList(event) {
        event.preventDefault()

            const newItem = {
                id: Date.now(),
                nome: item.nome,
                checked: false,
            }

            setList([newItem, ...list])
            setItem({ nome: '', edit: false })

    }


function editList(event){
    event.preventDefault()
    const index = aux

    list[index].nome = item.nome
    setItem({ nome: '', edit: false })
}


    return (
        <>
            <h1>{titulo}</h1>
            <form >
                <input onChange={(e) => setItem({ nome: e.target.value, edit: item.edit})}
                    value={item.nome}
                    placeholder="add item ..."
                    required />
                {item.edit ? <button onClick={editList}> save </button> : <button onClick={addList}> add </button>}
            </form>
        </>
    )
}

export default Form