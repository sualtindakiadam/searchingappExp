import React, { useState } from "react";
import Button from "../Button";
import "./Search.scss"
import {setSearchedData} from '../../redux/actions/setSearchedData'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


import { BsSearch } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
export default function Search(props) {
    const dispatch = useDispatch()
    const searchedData = useSelector(state=> state.getSearchedData)
    const [searched, setSearched] = useState([])
    const navigate = useNavigate()


    const searchBtnClk = () => {
        console.log("searched")
        console.log(searchedData);


        dispatch(setSearchedData(props.mockData.filter((mockData) => {
            //return mockData[0].toLowerCase().startsWith(searched.toLowerCase()); //başından aramak için
            return mockData[0].toLowerCase().includes(searched.toLowerCase()); //içinde aramak için

        })))

    }

    const showMore = () => {
        navigate('/RecordList')
    }

    return (
        <div>
            <center >
                <div style={{ width: 550 }}>
                    {props.searchType == "little" ?
                        <div className="titleb">
                            Find in records
                        </div> : null}
                    <BsSearch size="15" className="searchIcon" />
                    <input
                        id='dogrulanacakKod'
                        type='text'
                        placeholder="Search"
                        className='searchInput'
                        onChange={(e) => setSearched(e.target.value)}  >
                    </input>
                    <Button text="Search" func={() => searchBtnClk()} />
                </div>
            </center>

            {searchedData.length > 0 && props.searchType == "little" ?
                <div className="searchedArea" >

                    <div className="searchedItem">

                        {searchedData.slice(0, 3).map((d) => {
                            return (<div className="listItemContainer">
                                <div className="deneme" >
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
                            </div>)
                        })}


                    </div>

                    <div className="showMore" onClick={() => showMore()}>
                        Show more...
                    </div>



                </div> : null

            }




        </div>



    )
}