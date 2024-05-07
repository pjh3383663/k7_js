

export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col p-5 m-10 
                    justify-center items-center
                    w-2/3 h-2/3 bg-lime-400 text-white">
        <div className="w-full">
        {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
        </div>
        
    </div>
  )
}
