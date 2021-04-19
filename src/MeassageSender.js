import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './MeassageSender.css'
import { useStateValue } from './StateProvider'
import db  from './firebase'
import firebase from 'firebase'

function MeassageSender() {
  const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      db.collection('posts').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl
    })

      setInput('');
      setImageUrl('');
    }

  return (
    <div className='meassageSender'>
        <div className='meassageSender__top'>
          <Avatar src={user.photoUrl}/>
          <form>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='meassageSender__input'
            placeholder={`What's do your think ${user.displayName} ?`}/>

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
