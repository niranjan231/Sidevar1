import "./Sidevar.css";
import SidevarData from "./SidevarData";



const Sidevar=()=>{
    return (
        <div className="sidevar-1">
            <ul className="sidevar-list">
            {
                SidevarData.map((val,key)=>{
                    return <li key={key} className="row" onClick={()=>{window.location.pathname=val.link;}}>
                    <div className="icon">{val.icon}</div>
                    <div className="title">{val.title}</div>
                    </li>

                    
                })
            }
            </ul>
        </div>
    )
}
export default Sidevar;