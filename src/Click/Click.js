import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import Side from "../Side/Side";








const Click=()=>{
    const [save, setSave] = useState(false);
    const [click2, setClick] = useState(false);
    const handleSave=()=>{
        setSave(true);
       
    }
    const handleCros=()=>{
         window.location.href="/"
    }
    return (
        <div style={{width:"50px", height:"50px"}}>
           <span onClick={handleSave}> {save ? <MdCancel onClick={handleCros}/>  : <ImMenu />
           }</span>
           {
            save && <Side/>
           }
           
        </div>
    )
}
export default Click;