import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MeassageSender from './MeassageSender'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
    {/* StoryReel */}
    <StoryReel />
    {/* MeassageSender */}
    <MeassageSender />

    {/* Post */}
    <Post
    profilePic='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'
    message='working'
    timestamp='timestamp'
    username='Jordan Type'
    image='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' />
    <Post
    profilePic="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
    message="this is working"
    timestamp="timestamp"
    username="Jordan Type"
    image="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" />


    </div>
  );
}

export default Feed
