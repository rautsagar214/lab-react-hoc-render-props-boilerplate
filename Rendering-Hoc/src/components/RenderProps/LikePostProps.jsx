import React from 'react'
import RenderProps from './RenderProps'
function LikePostProps() {
  return (
    <RenderProps>
        {
            ({count , handleCount}) => (
                <div>
                    <button onClick={handleCount}>Like Post Render {count}</button>
                </div>
            )
        }
    </RenderProps>
  )
}

export default LikePostProps