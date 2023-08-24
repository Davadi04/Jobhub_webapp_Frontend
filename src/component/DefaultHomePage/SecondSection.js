import React, { useState, useEffect } from "react";
import * as Style from "./style";

const SecondSection = () => {
  return (
    <Style.SecondSection>
      <Style.SecondSection_Container>
        <Style.SecondSection_Header>
          Join 4,000+ companies already posting jobs
        </Style.SecondSection_Header>

        <Style.SecondSection_ImageContainer>
          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image1.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>

          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image2.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>

          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image3.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>
          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image4.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>

          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image5.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>

          <Style.SecondSection_ImagesDiv>
            <Style.SecondSection_Images
              src={require("../../image/image6.png")}
              alt="img"
            />
          </Style.SecondSection_ImagesDiv>
        </Style.SecondSection_ImageContainer>
      </Style.SecondSection_Container>
    </Style.SecondSection>
  );
};

export default SecondSection;
