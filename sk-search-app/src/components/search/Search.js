import React, { useState } from "react";
import Button from "../Button";
import "./Search.scss"

import { useDispatch, useSelector } from 'react-redux'


import { BsSearch } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
export default function Search(props) {

    const [searched, setSearched] = useState()

    return (
        <div>

            <center style={{ marginTop: 20 }}>

                <div style={{ width: 550 }}>
                    <div className="titleb">
                        Find in records
                    </div>
                    <BsSearch size="15" className="searchIcon" />
                    <input
                        id='dogrulanacakKod'
                        type='text'
                        placeholder="Search"
                        className='searchInput'
                        onChange={(e) => setSearched(e.target.value)}  >
                    </input>
                    <Button text="Search" func={console.log("searched")} />
                </div>

            </center>

            <div className="searchedArea">

                <div className="searchedItem">

                    {/*searchedRes.map((d) => {
                             return < div className="user" style={{ color: "black", backgroundColor: 'rgba(0,0,0,0.1)', marginBottom: 5, overflowX: 'auto' }} > {d.IlceRef} - {d.IlceAdi} - ( {d.KadastroMahalleAd} - {d.KadastroAlan} m2 )- ({d.TapuMahalleAd} - {d.TapuAlan}) - {d.TapuCinsAciklama} </div>
                            })*/}

                    <div className="deneme" >
                        <GoLocation size="20" className="icon1" />

                        <div style={{ flex: 1 }}>
                            <text style={{ fontSize: 15 }}>
                                18th Street Brewery
                            </text>
                            <br />
                            <text style={{ fontSize: 15, fontFamily: 'initial', color: 'rgba(0,0,0,0.4)' }}>
                                asdas
                            </text>



                        </div>

                    </div>


                </div>
                <div className="searchedItem">

                    {/*searchedRes.map((d) => {
                             return < div className="user" style={{ color: "black", backgroundColor: 'rgba(0,0,0,0.1)', marginBottom: 5, overflowX: 'auto' }} > {d.IlceRef} - {d.IlceAdi} - ( {d.KadastroMahalleAd} - {d.KadastroAlan} m2 )- ({d.TapuMahalleAd} - {d.TapuAlan}) - {d.TapuCinsAciklama} </div>
                            })*/}

                    <div className="deneme" >
                        <GoLocation size="20" className="icon1" />

                        <div style={{ flex: 1 }}>
                            <text style={{ fontSize: 15 }}>
                                18th Street Brewery
                            </text>
                            <br />
                            <text style={{ fontSize: 15, fontFamily: 'initial', color: 'rgba(0,0,0,0.4)' }}>
                                asdas
                            </text>

                        </div>

                    </div>

                </div>
                <div className="showMore" onClick={()=>alert("shoew more")}>
                    Show more...
                </div>



            </div>






        </div>



    )
}