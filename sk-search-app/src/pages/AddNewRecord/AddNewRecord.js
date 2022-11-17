import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMockData } from "../../redux/actions/setMocData";
import { AiOutlineArrowLeft } from "react-icons/ai"
import "./AddNewRecord.scss"
import Button from "../../components/Button";
import TesodevLogo from "../../components/TesodevLogo";
import AlertComp from "../../components/alert/AlertComp";
import moment from 'moment'
import { localDatabaseName } from "../../publics/EnumText";
import { useNavigate } from "react-router-dom";
const titles = ([
    { id: 0, title: "Name Surname", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 1, title: "Company", minChar: "4", maxChar: "60", inputType: "text" },
    { id: 2, title: "EMail", minChar: "4", maxChar: "60", inputType: "email" },
    { id: 3, title: "Date", minChar: "4", maxChar: "60", inputType: "date" },
    { id: 4, title: "Country", minChar: "2", maxChar: "40", inputType: "text" },
    { id: 5, title: "City", minChar: "2", maxChar: "40", inputType: "text" },

])
export default function AddNewRecord() {
    const dataForSave = ([])
    const errorList = ([])
    const mockDatainRedux = useSelector(state => state.getMockData)[0]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errorListtoSend, setErrorListtoSend] = useState({})
    const [asd, setasd] = useState(false)
    const [obj, setObj] = useState({})
    const addClick = () => {
        var err = false
        setErrorListtoSend([])
        for (var i = 0; i < titles.length; i++) {
            if (!dataForSave[i]) {
                enableError(i)
                err = true
            }
        }
        if (!err) {
            mockDatainRedux.data.push(dataForSave)
            dispatch(setMockData([mockDatainRedux]))
            localStorage.setItem(localDatabaseName, JSON.stringify(mockDatainRedux))
            navigate(-1)

        } else {
            setErrorListtoSend(errorList)
            setObj(<AlertComp errorMessageList11={errorList} />)
            setasd(true)
        }
    }
    const inputType = (event, type) => {
        if (type == "text") {
            if (!/^[A-Za-z ]+$/.test(event.key)) {
                event.preventDefault();
            }
        } else if (type == "number") {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
            }
        }
    }
    const enableError = (id) => {
        dataForSave[id] = ""
        errorList[id] = titles[id].inputType == "text" ? "The " + titles[id].title + " can be a minimum of " + titles[id].minChar + " characters and a maximum of " + titles[id].maxChar + " characters." :
            titles[id].inputType + "'s format incorrect"
        document.getElementById(id).style.borderColor = 'red'
        document.getElementById("errorLabel" + id).style.visibility = 'visible'
    }
    const disableError = (id, value) => {
        dataForSave[id] = value
        delete errorList[id];
        document.getElementById(id).style.borderColor = ''
        document.getElementById("errorLabel" + id).style.visibility = 'hidden'
    }
    const emailValidation = (value, id) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!value || regex.test(value) === false) {
            enableError(id)
            return false;
        } else {
            disableError(id, value)
        }
        return true;
    }
    const onchangeInput = (d, value) => {
        switch (d.inputType) {
            case "date":
                disableError(d.id, moment(value).format("DD/MM/YYYY").toString())
                break;
            case "email":
                emailValidation(value, d.id)
                break;
            default:
                if (value.length < d.minChar) {
                    enableError(d.id)
                } else {
                    disableError(d.id, value)
                }
                break;
        }
    }
    const mainPage = React.useMemo(() => <div>
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
                            <input
                                id={d.id}
                                type={d.inputType}
                                maxLength={d.maxChar}
                                className="input"
                                onChange={(e) => onchangeInput(d, e.target.value)}
                                placeholder={"Enter " + d.title}
                                onKeyPress={(event) => inputType(event, d.inputType)}
                            />
                            <div id={"errorLabel" + d.id} className="errorLabel" >
                                {d.inputType == "text" ? "The " + d.title + " can be a minimum of " + d.minChar + " characters and a maximum of " + d.maxChar + " characters." :
                                    d.inputType + "'s format incorrect"}
                            </div>
                        </div>
                    </div>
                })}
                <div id="addBtnContainer" className="addContainer"  >
                    <Button text="Add" func={addClick} />
                </div>
            </div>
        </div>
    </div>, []);
    const footer = React.useMemo(() => <AlertComp errorMessageList11={errorListtoSend} />, []);
    return (
        <>
            {mainPage}
            {errorListtoSend && errorListtoSend.length > 0 ? <div id="errorMessage" className="alertContainer">{obj}</div> : null}
        </>
    )
}