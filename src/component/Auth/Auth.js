import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";

const Auth = ({ field, setField }) => {
  const navigate = useNavigate();

  console.log(field);

  const handleCustomerButton = () => {
    setField("customer");
    navigate("/account/signUp");
  };

  const handleEmployerButton = () => {
    setField("employer");
    navigate("/account/signUp");
  };

  console.log(field);

  return (
    <Style.Auth>
      <Style.Auth_COntainer>
        <Style.Auth_HeaderContainer>
          <Style.Auth_HeaderContainerName>
            <Style.Auth_Header>select account type</Style.Auth_Header>

            <Style.Auth_SubHeader>
              what would you like to do
            </Style.Auth_SubHeader>
          </Style.Auth_HeaderContainerName>

          <Style.Auth_HeaderContainerIcon>
            <RxCross2 />
          </Style.Auth_HeaderContainerIcon>
        </Style.Auth_HeaderContainer>

        <Style.Auth_ItemContainer>
          <Style.Auth_Item onClick={handleCustomerButton}>
            <Style.Auth_IConHolder>
              <Style.Auth_HeaderImage
                src={require("../../image/Logo.png")}
                alt="img"
              />
            </Style.Auth_IConHolder>

            <Style.Auth_IConHEader>find a job</Style.Auth_IConHEader>
          </Style.Auth_Item>
          <Style.Auth_Item onClick={handleEmployerButton}>
            <Style.Auth_IConHolder>
              <Style.Auth_HeaderImage
                src={require("../../image/Logo.png")}
                alt="img"
              />
            </Style.Auth_IConHolder>

            <Style.Auth_IConHEader>post a job</Style.Auth_IConHEader>
          </Style.Auth_Item>
        </Style.Auth_ItemContainer>
      </Style.Auth_COntainer>
    </Style.Auth>
  );
};

export default Auth;
