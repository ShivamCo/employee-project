
import callIcon from "../assets/Group46.png"

const CallIcon = () =>{

    return(
        <button onClick={(e)=> console.log(e.value)} value="dt" className="text-white fixed z-50  right-0 m-8 " >
            <img value="dfd" src={callIcon} alt="call-icon" />
        </button>
    )

}


export default CallIcon;