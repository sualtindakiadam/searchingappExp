import React from "react";
import logo from "../assets/tesodevLogo.jpg"
import { useNavigate } from "react-router-dom";

export default function TesodevLogo() {
    const navigate = useNavigate()
    return (
        <img src={logo} className="image" onClick={()=>navigate("/")} style={{cursor:'pointer'}} />
    )
}