import React from 'react'
import CommonHoc from './CommonHoc'

const LikeImgHOC = ({handleCount,count}) => {
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}

export default CommonHoc(LikeImgHOC)