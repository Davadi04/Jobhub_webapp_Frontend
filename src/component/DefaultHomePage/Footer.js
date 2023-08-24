import React, { useState, useEffect } from "react";
import * as Style from "./style";

const Footer = () => {
  return (
    <Style.Footer>
      <Style.Footer_ImgAndTextDiv>
        <Style.Footer_ImgContainer>
          <Style.Footer_Img src={require("../../image/Logo.png")} alt="img" />
        </Style.Footer_ImgContainer>
        <Style.Footer_ImgText>JobHub</Style.Footer_ImgText>
      </Style.Footer_ImgAndTextDiv>
      <Style.Footer_CopyRight>
        © 2023 JobHub All rights reserved
      </Style.Footer_CopyRight>
    </Style.Footer>
  );
};

export default Footer;
