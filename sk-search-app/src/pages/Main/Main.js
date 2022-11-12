import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MockData from "../../mockData.json"

import "../../publics/ClassTypes.scss"

import TesodevLogo from "../../components/TesodevLogo";
import Button from "../../components/Button";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/footer";
import News from "../../components/news/News";

import { useSelector, useDispatch } from "react-redux";
import { setMockData } from "../../redux/actions/setMocData";

export default function Main() {
  const navigate = useNavigate()
  const mockDatainRedux = useSelector(state => state.getMockData)
  const dispatch = useDispatch()
  const LSName ="ff"

  const [items, setItems] = useState([])


  const firstOpen = () => {
    console.log("yerelden çekildi");
    const localData = JSON.parse(localStorage.getItem(LSName))

    if (mockDatainRedux[0] == null) {

      if (localData == null) {
        console.log("boş local")

        localStorage.setItem(LSName,JSON.stringify(MockData))    
        dispatch(setMockData([MockData]))


      } else {
        console.log("dolu local")
        console.log(mockDatainRedux);
        dispatch(setMockData([localData]))



      }


    } else {
      console.log("değil")
     // console.log(mockDatainRedux)

    }










    //  dispatch(setMockData(mockDatainRedux))
  }

  const addStorage = () => {
    //localStorage.setItem("items",JSON.stringify(MockData))

  }


  useEffect(() => {

    firstOpen()

    console.log("main")

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
        <div className="center">

          <Search />

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