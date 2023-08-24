import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VerifyEmail } from "../../action/auth";

const VerifyScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(VerifyEmail(id));
  }, []);

  return (
    <Style.VerifyScreen>
      <Style.VerifyScreen_Container>
        <Style.VerifyScreen_Main>
          <Style.VerifyScreen_MainIconHolder>
            <Style.VerifyScreen_Icon
              src={require("../../image/Success.png")}
              alt="img"
            />
          </Style.VerifyScreen_MainIconHolder>

          <Style.VerifyScreen_DescriptionDiv>
            <Style.VerifyScreen_PopUpDescriptionHeader>
              welcome
            </Style.VerifyScreen_PopUpDescriptionHeader>

            <Style.VerifyScreen_PopUpDescriptionSubHeader>
              you have successfully created an account. Proceed to complete the
              profile
            </Style.VerifyScreen_PopUpDescriptionSubHeader>
          </Style.VerifyScreen_DescriptionDiv>
        </Style.VerifyScreen_Main>
        <Link to="/account/signIn">
          <Style.VerifyScreen_SectionContainerButton variant="contained">
            Proceed
          </Style.VerifyScreen_SectionContainerButton>
        </Link>
      </Style.VerifyScreen_Container>
    </Style.VerifyScreen>
  );
};

export default VerifyScreen;
