import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { setSearchedData } from '../../redux/actions/setSearchedData'
import Button from "../Button";
import RecordListItem from "../RecordListItem/RecordListItem";
import "./Search.scss"
export default function Search(props) {
    const dispatch = useDispatch()
    const searchedData = useSelector(state => state.getSearchedData)
    const data = useSelector(state => state.getMockData)[0].data
    const navigate = useNavigate()
    const showMore = () => {
        navigate('/RecordList')
    }
    const search = (value) => {
        console.log(value.length);
        console.log(data);
        if (value.length > 2) {
            dispatch(setSearchedData(data.filter((mockData) => {
                return mockData[0].toString().toLowerCase().startsWith(value.toLowerCase()); //başından aramak için
                //return mockData[0].toString().toLowerCase().includes(value.toLowerCase()); //içinde aramak için
            })))
        } else {
            dispatch(setSearchedData([]))
        }
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
                        onChange={(e) => search(e.target.value)}  >
                    </input>
                    <Button text="Search" func={() => showMore()} />
                </div>
            </center>
            {searchedData.length > 0 && props.searchType == "little" ?
                <div className="searchedArea" >
                    <div className="searchedItem">
                        <RecordListItem
                            startIndex={0}
                            endIndex={3}
                        />
                    </div>
                    {searchedData.length > 2 ?
                        < div className="showMore" onClick={() => showMore()} style={{ cursor: 'pointer' }}>
                            Show more...
                        </div> : null}
                </div> : null
            }
        </div >
    )
}