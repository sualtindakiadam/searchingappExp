import React from "react";
import { NavLink } from "react-router-dom";

import "../../publics/ClassTypes.scss"

import TesodevLogo from "../../components/TesodevLogo";
import Button from "../../components/Button";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/footer";

export default function Main() {

  const addNewRecord = () => {

    alert("add new record")

  }

  return (
    <div >
      <div>
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
      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}