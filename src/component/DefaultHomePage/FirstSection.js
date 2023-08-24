import React, { useState, useEffect } from "react";
import * as Style from "./style";
import Auth from "./Auth";
import { useNavigate } from "react-router-dom";

const FirstSection = ({
  toggleHomePagePopup,
  settoggleHomePagePopup,
  field,
  setField,
}) => {
  const navigate = useNavigate();

  return (
    <Style.FirstSection>
      <Style.FirstSection_Container>
        <Style.FirstSection_HeaderButton variant="outlined">
          About us
        </Style.FirstSection_HeaderButton>

        <Style.FirstSection_BigText>
          Unlock the Ultimate Connection between Job Seekers and Employers
        </Style.FirstSection_BigText>

        <Style.FirstSection_SubText>
          At JobHub, we strive to deliver an unparalleled experience in
          connecting job seekers with their dream opportunities and empowering
          employers to discover top talent effortlessly.
        </Style.FirstSection_SubText>

        <Style.FirstSection_ButtonContainer>
          <Style.FirstSection_Button
            onClick={() => navigate("/account/signUp")}
            variant="contained"
          >
            sign up
          </Style.FirstSection_Button>
        </Style.FirstSection_ButtonContainer>
      </Style.FirstSection_Container>

      {toggleHomePagePopup == true && (
        <Auth
          setField={setField}
          field={field}
          toggleHomePagePopup={toggleHomePagePopup}
          settoggleHomePagePopup={settoggleHomePagePopup}
        />
      )}
    </Style.FirstSection>
  );
};

export default FirstSection;
