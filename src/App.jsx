import React from 'react'
import { useState, createContext, useEffect } from 'react'
import './App.css'

import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'
import Container from './components/Container'

export const AppContext = createContext(null)

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem('DoList')) || [])
  const [item, setItem] = useState({})
  const [aux, setAux] = useState({})

  const value = { list, setList, item, setItem, aux, setAux }

  useEffect(() => {
    localStorage.setItem('DoList', JSON.stringify(list))
  }, [list])


  return (
    <AppContext.Provider value={value}>
      <Container>
        <Form titulo={"To Do List"} />
        <List list={list} />
        <Footer />
      </Container>
    </AppContext.Provider>
  )
}

export default App


