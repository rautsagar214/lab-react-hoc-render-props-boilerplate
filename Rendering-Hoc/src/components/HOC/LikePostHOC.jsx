import React from 'react'
import CommonHoc from './CommonHoc'

const LikePostHOC = ({handleCount , count}) => {
  return (
    <div>
        <button onClick={handleCount}>Like Post {count}</button>
    </div>
  )
}

export default CommonHoc(LikePostHOC)