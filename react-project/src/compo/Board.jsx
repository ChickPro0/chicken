import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'

const Board = () => {

  const [data, setData] = useState()

  useEffect(() => {
    axios.post('/user/read')
    .then((res) => {
      setData(res)
    })
  }, [])

  const params = useParams()
  const board = data.data.data[params.index]
  return (
    <div>
      <div className='board-body center'>
        <div className='board-body-padding'>
          <div className='board-body-header'>
            <h1 className='text-align-center'>{board.title}</h1>
            <p>작성자 : 김치킨</p>
            <p>작성 일자 : 2023-09-23</p>
          </div>
          <hr/>
          <div className='board-body-text'>
            {board.post}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board