import React, { useState } from "react";
import "./News.scss"

import Button from "../Button";

import office from "../../assets/office.jpg"

import { GrNext, GrPrevious } from "react-icons/gr"



const data = ([
    { id: 1, title: "0", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 2, title: "1", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 3, title: "2", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 4, title: "3", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 5, title: "4", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 6, title: "5", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 7, title: "6", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 8, title: "7", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 10, title: "8", image: office, user: "ali veli", date: "11.11.2021" },
])


export default function News() {

    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(4)


    const prevPage = () => {
        if (first > 0) {
            setLast(first)
            setFirst(first - 4)
        }


    }


    const nextPage = () => {
        if (data.length - last > 0) {
            setFirst(last)
            setLast(last + 4)
        }


    }

    return (
        <div className="newsContainer" >

            <div className="prevContainer">

                <Button text={<GrPrevious />} func={prevPage} />

            </div>

            {data.slice(first, last).map((d) => {
                return < div className="newsItem"  >
                    <img src={d.image} className="officeImage" />
                    <p>{d.title}</p>

                </div>
            })}

            <div className="nextContainer">
                <Button text={<GrNext />} func={nextPage} />

            </div>




        </div>
    )
}