import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption';
import Post from './Post';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feeds = () => {
  const user =  useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id:doc.id,
          data: doc.data(),
        }
      )))
    })
  }, []);


  const sendPost = e => {
    e.preventDefault();
    
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
  }
  return (  
    <div className="flex-[0.60] mx-[20px]">
      <div className='bg-white pb-[20px] rounded-[10px] mb-[20px] p-[10px]'>
        <div className="flex w-full p-[10px] text-gray-500 rounded-[30px] pl-[15px] border-[1px] border-lightgray">
          <CreateIcon />
          <form className="flex w-full">
            <input value= { input } onChange = {e => setInput(e.target.value)} type="text" className="border-none outline-0 ml-[10px] font-semibold flex-1"/>
            <button onClick={ sendPost }type='submit' className="hidden">Send</button>
          </form>
        </div>
        <div className="flex justify-evenly">
          <InputOption Icon={ ImageIcon } title="Photo" color="#70B5F7"/>
          <InputOption Icon={ SubscriptionIcon } title="Video" color="#E7A33E"/>
          <InputOption Icon={ EventNoteIcon } title="Event" color="#C0CBCD"/>
          <InputOption Icon={ CalendarViewDayIcon } title="Write article" color="#7FC15E"/>
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id , data : { name, description , message, photoUrl}}) => (
          <Post key = { id } name={ name } description={ description } message= { message } photoUrl={ photoUrl }/>
        ))}
      </FlipMove>

      
    </div>
  )
}

export default Feeds