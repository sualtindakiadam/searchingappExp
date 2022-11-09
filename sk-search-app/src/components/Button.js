import React from "react";
import "../publics/ClassTypes.scss"

export default function Button(props) {
    return (
            <button className="button" onClick={() => props.func()} >{props.text}</button>
    )
}