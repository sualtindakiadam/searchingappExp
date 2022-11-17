import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMockData } from "../../redux/actions/setMocData";
import MockData from "../../mockData.json"
import TesodevLogo from "../../components/TesodevLogo";
import Button from "../../components/Button";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/footer";
import News from "../../components/news/News";
import "./Main.scss"
import { localDatabaseName } from "../../publics/EnumText";
export default function Main() {
  const navigate = useNavigate()
  const mockDatainRedux = useSelector(state => state.getMockData)
  const dispatch = useDispatch()
  const  firstOpen = () => {
    const localData = JSON.parse(localStorage.getItem(localDatabaseName))
    if (mockDatainRedux[1] == null ) {
      if (localData == null) {
        localStorage.setItem(localDatabaseName, JSON.stringify(MockData))
        dispatch(setMockData([MockData]))
      } else {
        dispatch(setMockData([localData]))
      }
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
      <div className="bodyContainer1">
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
      <div className="mainNewsCont">
        <News />
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  )
}