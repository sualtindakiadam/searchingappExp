import React from "react";
import { NavLink } from "react-router-dom";
import "./AddLink.scss"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Button from "../../components/Button";


import TesodevLogo from "../../components/TesodevLogo";


const titles = ([
    { id: 1, title: "Name Surname" },
    { id: 2, title: "Country" },
    { id: 3, title: "City" },
    { id: 4, title: "EMail" },

])

export default function AddLink() {


    return (
        <div>
            <div className="headerContainer">
                <TesodevLogo />
                <NavLink className="back" to="/" style={{ color: 'black', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                    {<AiOutlineArrowLeft size={25} style={{ alignItem: 'center', marginRight: 10 }} />}  Return to List Page

                </NavLink>
            </div>
            <div className="formContainer">
                <div>
                    {titles.map((d) => {
                        return <div className="formItemContainer" >
                            <div >{d.title}</div>
                            <div >
                                <input type='text' className="input" onChange={(e) => console.log(d.title)} placeholder={"Enter " + d.title} />
                            </div>
                        </div>
                    })}
                </div>

            </div>
      

        </div>
    )
}