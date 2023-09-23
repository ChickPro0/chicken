import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from './Board'
import List from './List'
import Write from './Write'
import Header from './Header'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/board/:index' element={<Board></Board>}></Route>
        <Route path='/list' element={<List></List>}></Route>
        <Route path='write' element={<Write></Write>}></Route>
      </Routes>
    </div>
  )
}

export default Main