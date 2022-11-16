import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { GoLocation } from "react-icons/go"
import "./RecordListItem.scss"
export default function RecordListItem(props) {
    const data = useSelector(state => state.getSearchedData)
    return (
        <div>
            <div >
                {data.slice(props.startIndex, props.endIndex).map((d) => {
                    return (<div className="cont" >
                        <GoLocation size="20" className="icon1" />
                        <div style={{ flex: 1 }}>
                            <text style={{ fontSize: 15 }}>
                                {d[1]}
                            </text>
                            <br />
                            <text style={{ fontSize: 15, fontFamily: 'initial', color: 'rgba(0,0,0,0.4)' }}>
                                {d[5]}, {d[4]}
                            </text>
                        </div>
                        <div className="nameDateContainer">
                            <text style={{ fontSize: 13, fontFamily: 'initial', color: 'rgba(0,0,0,0.4)' }}>
                                {d[0]}<br />{d[3]}
                            </text>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}