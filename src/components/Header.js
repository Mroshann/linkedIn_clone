import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SectionIcon from './SectionIcon';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';


const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }
  return (
    <div className='flex justify-evenly border-b-[0.1px] border-lightgray w-full py-[10px] sticky top-0 z-[999] bg-white'>
        <div className="flex items-center space-x-[10px]">
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-160-461814.png" className =" object-contain h-[30px] " alt="linkedin" />
            <div className="flex inline-block  p-[10px] items-center rounded-[5px]  h-[30px] text-gray-500 bg-[#eef3f8]">
                <SearchIcon />
                <input type="text" placeholder='Search' className="outline-none bg-transparent border-none"/>
            </div>
        </div>
        <div className='flex  '>
            <SectionIcon Icon = { HomeRoundedIcon } sectionName="Home"/>
            <SectionIcon Icon = { SupervisorAccountIcon } sectionName="my network"/>
            <SectionIcon Icon = { BusinessCenterIcon } sectionName="jobs"/>
            <SectionIcon Icon = { ChatIcon } sectionName="messaging" />
            <SectionIcon Icon = { NotificationsIcon } sectionName="Notifications"/>
            <SectionIcon avatar={true} 
            sectionName="me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header