

export default function MyDiv3({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-5 m-10 
                    justify-center items-center
                    w-2/3 h-2/3 bg-lime-400 text-white">
        <div className="w-full">
        {`${dn1} > ${dn2} > ${dn3}`}
        </div>
        
    </div>
  )
}
