import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMockData } from "../../redux/actions/setMocData";
import DatePicker from "react-datepicker";
import { AiOutlineArrowLeft } from "react-icons/ai"
import "./AddNewRecord.scss"
import Button from "../../components/Button";
import TesodevLogo from "../../components/TesodevLogo";
import AlertComp from "../../components/alert/AlertComp";
require('react-datepicker/dist/react-datepicker.css')
const titles = ([
    { id: 0, title: "Name Surname", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 1, title: "Company", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 2, title: "EMail", minChar: "4", maxChar: "60", inputType: "email" },
    { id: 3, title: "Date", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 4, title: "Country", minChar: "2", maxChar: "40", inputType: "text" },
    { id: 5, title: "City", minChar: "2", maxChar: "40", inputType: "text" },

])
export default function AddNewRecord() {
    const mockDatainRedux = useSelector(state => state.getMockData)
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date());
    const dataForSave = [titles.length]
    const addClick = () => {
        console.log("addClick")
        mockDatainRedux[0].data.push(dataForSave)
        //console.log(mockDatainRedux[0].data)
        dispatch(setMockData([mockDatainRedux[0]]))
        localStorage.setItem("zz", JSON.stringify(mockDatainRedux))
 
        /*return(
            <div className="alertContainer">
                <AlertComp text="deneme"/>
            </div>
        )*/
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
            <div className="headerContainer">
                <TesodevLogo />
                <NavLink className="back" to={-1} style={{ color: 'black', fontSize: 20, marginLeft: 20, textDecoration: 'none' }}>
                    {<AiOutlineArrowLeft size={25} style={{ alignItem: 'center', marginRight: 10 }} />}  Return to List Page
                </NavLink>
            </div>
            <div className="formContainer">
                <div >
                    {titles.map((d) => {
                        return <div className="formItemContainer" >
                            <div >{d.title}</div>
                            <div >
                                {/*d.inputType == "date" ?
                                    <div className="datePicker">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => dataForSave[d.id] = date} />
                    </div> :*/} <input
                                    type={d.inputType}
                                    className="input"
                                    onChange={(e) => dataForSave[d.id] = e.target.value}
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