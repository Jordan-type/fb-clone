import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

function Story({ image, profileSrc, title}) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className='story'>
    {/* // Story */}
    <Avatar className='story__avatar' src={ profileSrc } />
    <h6>{ title }</h6>
    </div>
  );
}

export default Story
