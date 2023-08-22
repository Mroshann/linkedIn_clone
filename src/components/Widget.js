import { FiberManualRecord, Info } from "@mui/icons-material"

const Widget = () => {
  const newsArticle = ( heading , subtitle ) => (
    <div className="flex  p-[10px] cursor-pointer hover:bg-neutral-100 space-x-[5px]">
      <div className="text-[#0177b7]">
        <FiberManualRecord className="!text-[15px]"/>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-[14px]">{heading}</h4>
        <p className="text-gray-400 text-[14px]">{ subtitle }</p>
      </div>
    </div>
    )

  return (
    <div className="flex-[0.20] sticky top-[80px] pb-[10px] bg-white rounded-[10px] border-[1px] border-lightgray h-fit">
      <div className="flex justify-between p-[10px] items-center">
        <h2 className="font-normal text-[16px]">Linkedin News</h2>
        <Info/>
      </div>

      {newsArticle("Coronavirus: India Updates ","Top news - 886 readers")}
      {newsArticle("Tesla founder fails twitter","Social media - 5466 readers")}
      {newsArticle("Bitcoin breaks $22k ","Crypto - 300 readers")}
      {newsArticle("Is Redux too good? ","Developers - 886 readers")}
      {newsArticle("The Mystery behind Hitler's death","History - 86 readers")}
     
    </div>

  
  )
}

export default Widget