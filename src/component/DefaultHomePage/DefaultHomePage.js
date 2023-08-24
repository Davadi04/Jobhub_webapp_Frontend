import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FouthSection from "./FouthSection";
import Footer from "./Footer";
import Auth from "./Auth";
import { RxCross2 } from "react-icons/rx";
import { LOGOUT } from "../../constants/actionType";

const DefaultHomePage = ({
  field,
  setField,
  toggleHomePagePopup,
  settoggleHomePagePopup,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOGOUT });
  }, []);

  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <FirstSection
        setField={setField}
        field={field}
        toggleHomePagePopup={toggleHomePagePopup}
        settoggleHomePagePopup={settoggleHomePagePopup}
      />
      <SecondSection />
      <ThirdSection />
      <FouthSection />
      <Footer />
    </div>
  );
};

export default DefaultHomePage;
