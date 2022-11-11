import React from "react";
import { NavLink } from "react-router-dom";
import "./AddLink.scss"
import { AiOutlineArrowLeft } from "react-icons/ai"
import Button from "../../components/Button";
import Footer from "../../components/footer/footer";

import TesodevLogo from "../../components/TesodevLogo";
import AlertComp from "../../components/alert/AlertComp";
import { useSelector,useDispatch } from "react-redux";
import { setDeneme } from '../../redux/actions/denemeActions'




const titles = ([
    { id: 1, title: "Name Surname", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 2, title: "Country", minChar: "2", maxChar: "40", inputType: "text" },
    { id: 3, title: "City", minChar: "2", maxChar: "40", inputType: "text" },
    { id: 4, title: "EMail", minChar: "4", maxChar: "60", inputType: "email" },

])

export default function AddLink() {

    const denemeData = useSelector(state => state.getDeneme)
    const dispatch = useDispatch()



    const addClick = () => {


        /*return(
            <div className="alertContainer">
                <AlertComp text="deneme"/>
            </div>
        )*/

        denemeData[0].id = denemeData[0].id +1
        dispatch(setDeneme([denemeData[0]]))

      
    }

    const onClicNext = () => {

/*
        talepData[0].Ilce = ilceKodu
        talepData[0].KoyMahalle = koyMahalleKodu
        talepData[0].CBSM = cbsmKodu
        talepData[0].pageType = talepData[0].pageType + 1


        dispatch(setTalepData([talepData[0]]))
*/
    }

  

    const inputType = (event, type) => {
        if (type == "text") {

            if (!/^[A-Za-z]+$/.test(event.key)) {
                event.preventDefault();
            }

        } else if (type == "number") {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }
    }


    const emailValidation = () => {
        //const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        /*if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;*/
    }


    return (
        <div>
            <h1>{denemeData[0].id}</h1>
            <div className="headerContainer">
                <TesodevLogo />
                <NavLink className="back" to="/" style={{ color: 'black', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                    {<AiOutlineArrowLeft size={25} style={{ alignItem: 'center', marginRight: 10 }} />}  Return to List Page

                </NavLink>
            </div>
            <div className="formContainer">
                <div >
                    {titles.map((d) => {
                        return <div className="formItemContainer" >
                            <div >{d.title}</div>
                            <div >
                                <input
                                    type={d.inputType}
                                    className="input"
                                    onChange={(e) => console.log(d.title)}
                                    placeholder={"Enter " + d.title}
                                    onKeyPress={(event) => inputType(event, d.inputType)}
                                />
                            </div>
                        </div>
                    })}
                    <div className="addContainer">
                        <Button text="Add" func={addClick} />

                    </div>
                </div>

            </div>
            
       




        </div>
    )
}