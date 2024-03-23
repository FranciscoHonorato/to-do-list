
import React, { useContext } from "react"
import { AppContext } from "../App"
import './Form.css'


function Form({ titulo }) {

    const { item, setItem, list, setList, aux, setAux } = useContext(AppContext)


    function addList(event) {
        event.preventDefault()
        
            if (aux.edit !== true) {
                const nItem = {
                    nome: item.nome,
                    checked:false,
                    id: Date.now(),
                }

                setList([nItem, ...list])
                setItem({ nome: '' })

            } else {

                list[aux.id].nome = item.nome
                setItem({ nome: '' })
                setAux({ edit: false })
              
            }
         
        
    }


    return (
        <>
            <h1>{titulo}</h1>
            <form onSubmit={addList}>
                <input onChange={(e) => setItem({ nome: e.target.value })}
                    value={item.nome}
                    placeholder="add item ..." 
                    required />
                {aux.edit ? <button> save </button> : <button> add </button>}
            </form>
        </>
    )
}

export default Form