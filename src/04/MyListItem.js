import { useState } from "react";

export default function MyListItem({title, imgUrl, content}) {
    const [n, setN] = useState(0);
    
    const handleCount = () => {
        setN(n + 1);
      };
  return (
    <div className="flex w-full justify-center items-start p-2 bg-slate-200">
        <div className="flex w-1/3 m-2">
            <img src={imgUrl} alt='imgUrl' />
        </div>
        <div className="flex flex-col w-2/3 m-2 p-2">
            <div>
                {title}
            </div>
            <div>
                {content}
            </div>
            <div>
                <span onClick={handleCount}>💖</span>
                <span> 좋아요 </span>
                <span>{n}</span>
            </div>
        </div>
      
    </div>
  )
}
