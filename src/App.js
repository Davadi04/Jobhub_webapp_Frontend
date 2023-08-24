import React, { useState, useEffect, useRef } from "react";
import * as Style from "./styled";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";
import SignIn from "./component/SignIn/SignIn";
import VerifyScreen from "./component/VerifyScreen/VerifyScreen";
import AppSignUp from "./component/AppSignUp/AppSignUp";
import ProfileCompletion from "./component/ProfileCompletion/ProfileCompletion";
import AccountSettingMain from "./component/NavBarProfile/AccountSetting/AccountSettingMain";
import CareerProfileMain from "./component/NavBarProfile/CareerProfile/CareerProfileMain";
import { useSelector } from "react-redux";
import DefaultHomePage from "./component/DefaultHomePage/DefaultHomePage";
import PreviewJobPost from "./component/PreviewJobPost/PreviewJobPost";
import Saved from "./component/Saved/Saved";
import HomeNavbar from "./component/HomeNavbar/HomeNavbar";
import SearchPost from "./component/SearchPost/SearchPost";

import ViewIndividualPage from "./component/ViewIndividualPage/ViewIndividualPage";
import Applied from "./component/Applied/Applied";
const App = () => {
  const searchField = {
    searchInput: "",
    searchLocation: "",
    searchJobType: "",
    searchJobMethod: "",
    searchSalaryRange: "",
    searchExperience: "",
  };
  const [toggleHomePagePopup, settoggleHomePagePopup] = useState(false);

  const { authData } = useSelector((state) => state.auth);

  const [field, setField] = useState("customer");
  const [search, setSearch] = useState(searchField);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, []);

  return (
    <BrowserRouter>
      <Style.StyledToolBar>
        <HomeNavbar
          search={search}
          setSearch={setSearch}
          settoggleHomePagePopup={settoggleHomePagePopup}
          toggleHomePagePopup={toggleHomePagePopup}
        />

        <Routes>
          {/*
 element={<Navigate to="/account/select/signUp" replace={true} />}

  */}
          <Route
            path="/"
            element={
              <DefaultHomePage
                settoggleHomePagePopup={settoggleHomePagePopup}
                toggleHomePagePopup={toggleHomePagePopup}
                field={field}
                setField={setField}
              />
            }
          />

          <Route path="/jobs/getSearchPost" element={<SearchPost />} />

          <Route
            path="/account/home/:id"
            element={
              authData == null ? (
                <Navigate to="/" replace={true} />
              ) : authData?.result.bio ? (
                <Home search={search} setSearch={setSearch} />
              ) : authData?.result.CompanyWebsite ? (
                <Home search={search} setSearch={setSearch} />
              ) : (
                <Navigate to="/" replace={true} />
              )
            }
          />

          <Route
            path="/account/accountsetting/:id"
            element={
              <AccountSettingMain setSearch={setSearch} search={search} />
            }
          />
          {/*   <Route
            path="/jobs/post/:id"
            element={<PreviewJobPost jobPost={jobPost} />}
/>    */}
          <Route
            path="/account/previewprofile"
            element={<CareerProfileMain />}
          />
          <Route
            path="/account/savedItem"
            element={<Saved search={search} setField={setField} />}
          />
          <Route
            path="/account/applyjobs/:id"
            element={<Applied search={search} setField={setField} />}
          />
          <Route
            path="/account/careerprofile"
            element={<CareerProfileMain />}
          />

          <Route
            path="/jobs/vieweditemPage/:id"
            element={<ViewIndividualPage field={field} />}
          />
          {/*<Route  path = '/account/select/signUp'  element = {<Auth setField = {setField} field = {field} />}   />  */}
          <Route
            path="/account/signUp"
            element={<AppSignUp setField={setField} field={field} />}
          />
          <Route path="/account/signIn" element={<SignIn />} />
          <Route
            path="/account/field/signUp"
            element={
              authData == null ? (
                <Navigate to="/" replace={true} />
              ) : (
                <ProfileCompletion />
              )
            }
          />
          <Route path="/account/:id/verify" element={<VerifyScreen />} />
        </Routes>
      </Style.StyledToolBar>
    </BrowserRouter>
  );
};

export default App;
