import { Avatar } from "@mui/material"
import InputOption from "./InputOption"
import { forwardRef } from "react"
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltSharp} from "@mui/icons-material"

const Post = forwardRef(({ name, description , message , photoUrl },ref) => {
  return (
    <div ref={ ref }className="flex flex-col bg-white p-[15px] mb-[10px] rounded-[10px]">
        <div className="flex mb-[10px] space-x-[15px]">
            <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
            <div>
                <h2 className="text-[15px] font-bold capitalize">{ name }</h2>
                <p className="text-[12px] text-gray-500 font-normal">{ description }</p>
            </div>
        </div>
        <div className="overflow-anywhere">
            <p>{ message }</p>
        </div>
        <div className="flex justify-evenly">
            <InputOption Icon={ThumbUpAltSharp} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOption Icon={SendOutlined} title="Send" color="gray"/>

        </div>
    </div>
  )
})

export default Post