import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useNavigate } from "react-router-dom";

const FouthSection = () => {
  const navigate = useNavigate();

  return (
    <Style.FouthSection>
      <Style.FouthSection_Container>
        <Style.FouthSection_BigText>
          Let's make the connection that counts!
        </Style.FouthSection_BigText>
        <Style.FouthSection_SubText>
          Join Us today and unlock endless possibilities for your career or your
          organization's growth.
        </Style.FouthSection_SubText>

        <Style.FouthSection_HeaderButton
          onClick={() => navigate("/account/signUp")}
          variant="contained"
        >
          sign up
        </Style.FouthSection_HeaderButton>
      </Style.FouthSection_Container>
    </Style.FouthSection>
  );
};

export default FouthSection;
