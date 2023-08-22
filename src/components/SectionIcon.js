import { Avatar } from "@mui/material"
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"

const SectionIcon = ({ avatar, Icon ,sectionName ,onClick}) => {
  const user = useSelector(selectUser);
  return (
    <div onClick= { onClick } className="flex flex-col items-center justify-center mr-[20px]  cursor-pointer text-gray-500  hover:text-gray-800 ">
        {Icon && <Icon className="!h-[25px]"/>}
        {avatar && (<Avatar src={user?.photoUrl} className="!h-[25px]  !w-[25px] ">{user?.displayName[0].toUpperCase()}</Avatar>)}
        <h3 className="text-[12px] font-normal capitalize ">{sectionName}</h3>
    </div>
  )
}

export default SectionIcon