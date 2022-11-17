import React, { useState } from "react";
import "./News.scss"
import office from "../../assets/office.jpg"
import { GrNext, GrPrevious } from "react-icons/gr"
const data = ([
    { id: 1, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 2, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 3, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 4, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 5, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 6, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 7, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 8, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
    { id: 10, title: "Aplan to Rebuild the Bus Terminal Everyone Loves tho Hate", image: office, user: "ali veli", date: "11.11.2021" },
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
        <div >
            <h2 style={{paddingLeft:0}}>Top News</h2>
            <div className="newsContainer" >
                <div className="nextPrewContainer">
                    <GrPrevious size={20} onClick={prevPage} />
                </div>
                <div  className="newslistContiner">
                    {data.slice(first, last).map((d) => {
                        return (
                            < div className="newsItem"   >
                                <img src={d.image} className="officeImage" />
                                <p><div style={{fontSize:12,fontWeight:700}}>{d.id}-{d.title}</div>
                                <br/>
                                <div style={{fontSize:10,}}>{d.date} by {d.user}</div>
                                </p>
                            </div>)
                    })}
                </div>
                <div className="nextPrewContainer">
                    <GrNext size={20} onClick={nextPage} />
                </div>
            </div>
        </div>
    )
}