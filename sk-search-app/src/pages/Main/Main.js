import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMockData } from "../../redux/actions/setMocData";
import MockData from "../../mockData.json"
import "../../publics/ClassTypes.scss"
import TesodevLogo from "../../components/TesodevLogo";
import Button from "../../components/Button";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/footer";
import News from "../../components/news/News";

import { localDatabaseName } from "../../publics/EnumText";


export default function Main() {
  const navigate = useNavigate()
  const mockDatainRedux = useSelector(state => state.getMockData)
  const dispatch = useDispatch()
  
  const  firstOpen = () => {
    console.log("yerelden çekildi");
    const localData = JSON.parse(localStorage.getItem(localDatabaseName))
    console.log(mockDatainRedux);
    if (mockDatainRedux[1] == null ) {
      if (localData == null) {
        console.log("Local data boş ")
        localStorage.setItem(localDatabaseName, JSON.stringify(MockData))
        dispatch(setMockData([MockData]))
      } else {
        console.log("dolu local")
        console.log(mockDatainRedux);
        dispatch(setMockData([localData]))
      }
    } else {
      console.log("mockDatainRedux boş değil")
    }
  }
  useEffect(() => {
    firstOpen()
  }, [])
  function addNewRecord(e) {
    navigate('/AddNewRecord')
  }
  return (
    <div >
      <div className="bodyContainer">
        <div className="end">
          <Button text="Add new record" func={addNewRecord} />
        </div>
        <div className="center">
          <TesodevLogo />
        </div>
        <div className="center" style={{marginTop:20}}>
          <Search searchType="little" />
        </div>
      </div>
      <div className="newsContainer">
        <News />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}