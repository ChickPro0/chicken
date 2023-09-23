import React from 'react'
import { useNavigate } from 'react-router-dom';

const List = () => {
  
  const number = [1,2,3,4,5,6,7,8,9,10];
  
  const renderBoard = () => {
    return number.map((post, index) => {
      return (
        <tr key={index + 1}>
          <td className = 'td-size-idx'>{index + 1}</td>
          <td className = 'td-left' onClick={() => {nav(`/board/:${index}`)}}>{index + 1}번 제목입니다</td>
          <td className = 'td-size-date'>2023-09-22</td>
        </tr>
        )
    })
  }

  const nav = useNavigate();

  return (
    <div className = 'text-align-center'>
        <div className = 'search-div'>
          <div>
            <input type="text" placeholder='검색어를 입력하세요'/>
          </div>
        </div>

        <h1>게시판</h1>

        <table className = 'board-table center'>
          <tbody>
            <tr style={{backgroundColor : 'whitesmoke'}}>
              <td className = 'td-size-idx'>번호</td>
              <td>제목</td>
              <td className = 'td-size-date'>등록일</td>
            </tr>

            {renderBoard()}

          </tbody>
        </table>

        <div className= ''></div>

        {/* 
            이후 번호 버튼이 들어갈자리
            게시물은 각 10개당 배정받고 이후에는 페이지 변경을 이용해야함.
            아래의 버튼은 대체버튼.            
            */}

        <div className='board-pages center'>
            <table className='center'>
              <tbody>
                <tr>
                  <td>이전</td>
                  { number.map((num, index) => {
                    return (<td key={index + 1}>{num}</td>)
                  })}
                  <td>이후</td>
                </tr>
              </tbody>
            </table>

        </div>

    </div>
  )
}

export default List