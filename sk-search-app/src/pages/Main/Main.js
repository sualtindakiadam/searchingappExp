import React from "react";
import { NavLink, useNavigate } from "react-router-dom";




import "../../publics/ClassTypes.scss"

import TesodevLogo from "../../components/TesodevLogo";
import Button from "../../components/Button";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/footer";
import News from "../../components/news/News";


export default function Main() {
  const navigate = useNavigate()

  function addNewRecord(e) {
    navigate('/addLink')

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