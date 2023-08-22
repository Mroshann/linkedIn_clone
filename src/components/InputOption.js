
const InputOption = ({ Icon, color, title }) => {
  return (
    <div className="flex items-center mt-[15px] text-gray-500 p-[10px] cursor-pointer
      hover:bg-neutral-200 hover:rounded-[10px] space-x-2">
        <Icon style={{ color: color }} />
        <h4>{ title }</h4>
    </div>
  )
}

export default InputOption