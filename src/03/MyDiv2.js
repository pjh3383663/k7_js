import MyDiv3 from "./MyDiv3";


export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-5 m-10 
                    justify-center items-center
                    w-2/3 h-2/3 bg-lime-600 text-white">
      <div className="w-full">
        {`${dn1} > ${dn2}`}
      </div>
      
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}
