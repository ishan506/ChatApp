import {useState,useEffect} from "react"
import { IoSend } from "react-icons/io5";
import { CgBoy } from "react-icons/cg";
function Chatpage(){
    const [change , setChange]=useState("")
     const [changes , setChanges]=useState([])
        const [c , setC]=useState(null)
        const [online , setOnline]=useState(navigator.onLine)
 function click() {
    if (c === null) {
        setChanges([...changes, change]);
    } else {
        const copy = [...changes];
        copy[c] = change;
        setChanges(copy);
        setC(null);
    }

    setChange("");

}
const handleof=()=>setOnline(false)
const handleon=()=>setOnline(true)


    useEffect(()=>{
     window.addEventListener("online" ,handleon  )
     window.addEventListener("offline" ,handleof  ) 
return()=>{
      window.removeEventListener("online" ,handleon  )
     window.removeEventListener("offline" ,handleof  )} 
     },[]) 
    // const p=prompt("enter")
    // if(p!==null){
    //    const message=[...changes] 
    // message[i]=p
    // setChanges(message)}
 function update(index){
    setChange(changes[index]);
setC(index);

    
 }
    function  remove (i){
    const message= changes.filter((user,index)=> i!==index)
  setChanges(message);
    
 }

 

 function copyText(text) {
   navigator.clipboard.readText(text);
  setChange(text)
}
    return(
        <>
 
        <div className="bg-blue-500 min-h-screen">
         
<ul>
{changes.map((user,index)=>(
<li key={index} className="flex justify-end w-full">{user} <button className="pl-3" onClick={()=>{update(index)}}>update</button>
<button className="pl-3"onClick={()=>{remove(index)}}>remove</button>  
<button onClick={() => copyText(user)}>
  Copy
</button>
</li>
))}
</ul>
         <div className="fixed bottom-0 left-0 w-full p-4 ml-59">
            
<input  className="rounded-3xl bg-amber-50" type="text" value={change} onChange={(e)=>
    setChange(e.target.value)}  
/> 
<button onClick={click}><IoSend /></button>
 {/* <button onClick={()=>{update(i)}}> update</button>
<button onClick={()=>{remove(i)}}> remove</button>  */}
<h1>{online ? "ONLINE" : "OFFLINE"}</h1>
</div>
</div>
        </>
    )
}
export default Chatpage