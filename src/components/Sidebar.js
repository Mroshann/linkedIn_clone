import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (item) => {
    return (
      <div className="flex font-semibold leading-2xl  w-fit text-[12px] p-[5px] mb-[5px] box-border text-gray-400 cursor-pointer hover:bg-neutral-100 hover:text-black hover:rounded-[10px]">
        <span className="mr-[5px] ml-[10px]">#</span>
        <p className="mr-[10px]">{ item }</p>
      </div>
    )
  }
  return (
    <div className="flex-[0.20]  min-w-[180px] sticky top-[80px] text-center h-fit rounded-[10px] ">
      <div className="flex flex-col items-center border-b-0 border-[1px] border-lightgray rounded-t-[10px] pb-[10px] bg-white">
        <img src="https://images.unsplash.com/photo-1563723876511-99c7ac0ae81c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
        className="-mb-[20px] w-full h-[60px] object-cover rounded-t-[10px]"
        alt="" />
        <Avatar className="mb-[10px] !h-[60px] !w-[60px] border-2 border-white" src={user.photoUrl}>{user.displayName[0].toUpperCase()}</Avatar>
        <h2 className="text-[15px] font-bold capitalize">{user.displayName}</h2>
        <h4 className="text-[11px] text-gray-500 font-normal">{user.email}</h4>
      </div>
      <div className="border-[1px] border-lightgray  bg-white p-[10px] mb-[10px]">
        <div className="flex justify-between mt-[10px]">
          <p className="font-medium tracking-tight text-gray-400 leading-xl text-[11px]">Connections</p>
          <p className="font-semibold leading-2xl font-poppins text-[#0a66c2] text-[11px]">1,234</p>
        </div>
        <div className="flex justify-between mt-[10px]">
          <p className="font-medium tracking-tight text-gray-400 leading-xl text-[11px]">Who's viewed your profile</p>
          <p className="font-semibold text-[#0a66c2] leading-2xl text-[11px]">2,134</p>
        </div>
      </div>
      <div className="border-[1px] border-lightgray rounded-[10px] bg-white text-start p-[10px] mt-[10px]">
        <p className="text-[13px] pb-[10px]">Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineer')}
        {recentItem('developer')}
        {recentItem('designer')}
      </div>
    </div>
  )
}

export default Sidebar