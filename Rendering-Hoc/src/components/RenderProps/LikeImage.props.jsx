import React from 'react'
import RenderProps from './RenderProps'

function LikeImageProps() {
  return (
    <RenderProps>
        {
            ({count , handleCount}) => (
                <div>
                    <button onClick={handleCount}>Like Image Render {count}</button>
                </div>
            )
        }
    </RenderProps>
  )
}

export default LikeImageProps