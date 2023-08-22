import  { useState } from 'react'
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [profilePic,setProfilePic] = useState('');
    const [name,setName] = useState('');
    
    const loginToApp = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(userAuth => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL 
                }))
            })
            .catch((error) => alert(error));
    };


    const register = () => {
        if(!name) {
            return alert('Please enter your name');
        }

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid : userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            })
            .catch(err => alert(err));
    };

  return (
    <div className="grid place-items-center x mx-auto pb-[100px] pt-[50px]">
        <img 
        className="object-contain h-[70px] my-[20px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="linkedin" />
        <form className="flex flex-col ">
            <input className="w-[350px] h-[50px] text-[20px] rounded-[5px] pl-[10px] mb-[10px] font-thin" type="text" value={ name } onChange={e => setName(e.target.value)} placeholder="Fullname ( required if registering )" />
            <input value={ profilePic } onChange={e => setProfilePic(e.target.value)} className="w-[350px] h-[50px] text-[20px] rounded-[5px] pl-[10px] mb-[10px] font-thin " type="url" placeholder='Profile pic URL (optional)'/>    
            <input value={ email } onChange={e => setEmail(e.target.value)} className="w-[350px] h-[50px] text-[20px] rounded-[5px] pl-[10px] mb-[10px] font-thin " type="email" placeholder='Email'/>    
            <input value={ password } onChange={e => setPassword(e.target.value)}className="w-[350px] h-[50px] text-[20px] rounded-[5px] pl-[10px] mb-[10px] font-thin " type="password" placeholder='Password'/>
            <button type="submit" className="w-[350px] h-[50px] text-lg bg-[#0074b1] text-white rounded-[5px]" onClick={ loginToApp }>Sign in </button> 

        </form>
        <p className="mt-[20px]">
            Not a member? {" "}
            <span onClick={ register } className="text-[#0074b1] cursor-pointer">Register Now</span>
        </p>   
    </div>
  )
}

export default Login