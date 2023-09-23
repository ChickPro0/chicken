import React from 'react'

const Board = () => {
  return (
    <div>
      <div className='board-body center'>
        <div className='board-body-padding'>
          <div className='board-body-header'>
            <h1 className='text-align-center'>Title</h1>
            <p>작성자 : 김치킨</p>
            <p>작성 일자 : 2023-09-23</p>
          </div>
          <hr/>
          <div className='board-body-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ducimus commodi reiciendis provident perferendis recusandae sequi doloremque minima illum officia iure, deleniti fuga minus nemo distinctio rerum soluta unde quo?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board