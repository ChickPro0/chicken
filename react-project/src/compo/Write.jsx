import React, { useRef } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom';

const Write = () => {

  const titleRef = useRef();
  const postRef = useRef();

  const nav = useNavigate();

  const clickSubmit = () => {
    
    axios.post('/user/write', {
      title : titleRef.current.value,
      post : postRef.current.value
    })
    .then((res)=> {

      console.log(res.data)

      if (res.data.msg === 'success') {
        alert('게시물 작성 완료!')
        nav('/list')
      }
      else {
        alert('게시물 작성 실패..')
      }
    })
  }
  return (
    <div>
        <div className='board-body center'>
          <div className='board-body-padding' style={{backgroundColor : 'whitesmoke'}}>
            <div className='board-body-header'>
              <h1 className='text-align-center'>
                <input type="text" placeholder='제목을 입력해주세요' ref={titleRef} id='title'/>
              </h1>
              <p>작성자 : 김치킨</p>
              <p>작성 일자 : 2023-09-23</p>
            </div>
            <hr/>
            <div className='board-body-text'>
              <textarea name="" id="" cols="30" rows="22" placeholder='게시글을 작성해주세요' ref={postRef}></textarea>
            </div>
            <div className='text-align-center'>
              <button className='submit-button' onClick={()=>{clickSubmit()}}><b>제출</b></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Write