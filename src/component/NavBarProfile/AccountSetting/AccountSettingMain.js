import React, { useState, useEffect } from "react";
import HomeNavbar from "../../HomeNavbar/HomeNavbar";
import Accounsetting from "./Accounsetting";

const AccountSettingMain = ({ setSearch, search }) => {
  const [currentLocation, setCurrentLocation] = useState("profile");

  return (
    <>
      <Accounsetting
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
};

export default AccountSettingMain;
