import React, { useState } from "react";
import "./AlertComp.scss"
import {AiOutlineCloseCircle} from 'react-icons/ai'
export default function AlertComp(props) {
    const [isOpen, setIsOpen] = useState(true);
    console.log("AlertComp");
    console.log(props.errorMessageList11);
    if(!isOpen){
        return null
    }else{
        return (
            <div className="alertCont"> 
                <div className="textCont">
                    <p>
                        <div>
                        Error while adding link element
                        </div>
                        <br />
                        <div>
                            {props.errorMessageList11.map((d,index)=>{
                                console.log("d---------");
                                console.log(d)
                                if(d!=""){
                                return(<div>
                                    - {d}
                                </div>)}
                            })  
                            }
                        </div>
                    </p>
                </div>
                <div  >   
                    <div className="exitBtn">
                        <AiOutlineCloseCircle size={25} onClick={()=>setIsOpen(false)}/>
                    </div> 
                    <div className="iconCont">   
                   Error
                   </div>
                </div>
            </div>
        )
    }   
}


