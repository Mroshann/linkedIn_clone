import './index.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Feeds from './components/Feeds';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import { useEffect } from 'react';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL 
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="bg-[#f3f2ef] flex  flex-col items-center font-poppins">
      <Header />

      {!user ? <Login/> : 
      <div className="flex  xs:flex-col  sm:flex-row mx-[20px] mt-[35px] max-w-[1200px]">
        <Sidebar />
        <Feeds /> 
        <Widget /> 
      </div>
      }

    </div>

  )
}

export default App