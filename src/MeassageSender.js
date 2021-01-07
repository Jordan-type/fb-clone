import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './MeassageSender.css'

function MeassageSender() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      //  some clever DB stuff

      setInput('');
      setImageUrl('');
    }

  return (
    <div className='meassageSender'>
        <div className='meassageSender__top'>
          <Avatar />
          <form>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='meassageSender__input'
            placeholder={`What's on your mind?`}/>

            <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='image URL (Option)' />

            <button onClick={ handleSubmit } type='submit'>
            Hidden submit
            </button>
          </form>
        </div>
        <div className='meassageSender__bottom'>
            <div className='meassageSender__option'>
               <VideocamIcon style={{ color: 'red' }} />
               <h3>Live Video</h3>
            </div>
            <div className='meassageSender__option'>
               <PhotoLibraryIcon style={{ color: 'green' }} />
               <h3>Photo/Video</h3>
            </div>
            <div className='meassageSender__option'>
               <InsertEmoticonIcon style={{ color: 'orange' }} />
               <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  );
}

export default MeassageSender
