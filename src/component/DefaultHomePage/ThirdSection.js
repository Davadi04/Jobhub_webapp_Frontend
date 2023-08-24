import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { IoFlashSharp } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdHeadset } from "react-icons/io";

const ThirdSection = () => {
  return (
    <Style.ThirdSection>
      <Style.ThirdSection_FirstContainer>
        <Style.ThirdSection_SubText>
          Why Choose JobHub?
        </Style.ThirdSection_SubText>

        <Style.ThirdSection_BigText>
          Experience the best job-seeking and recruitment journey possible.
        </Style.ThirdSection_BigText>
      </Style.ThirdSection_FirstContainer>

      <Style.ThirdSection_SecondContainer>
        <Style.ThirdSection_SecondItemDiv>
          <Style.ThirdSection_ImagesDiv>
            <IoFlashSharp style={{ color: "blue" }} />
          </Style.ThirdSection_ImagesDiv>

          <Style.ThirdSection_ItemSubText>
            Swift Applications
          </Style.ThirdSection_ItemSubText>

          <Style.ThirdSection_ItemBigText>
            Applying for jobs has never been smoother! With just a few clicks,
            job seekers can submit applications and upload their resumes
            seamlessly.
          </Style.ThirdSection_ItemBigText>
        </Style.ThirdSection_SecondItemDiv>

        <Style.ThirdSection_SecondItemDiv>
          <Style.ThirdSection_ImagesDiv>
            <BsArrowUpRight style={{ color: "blue" }} />
          </Style.ThirdSection_ImagesDiv>

          <Style.ThirdSection_ItemSubText>
            Seamless Navigation
          </Style.ThirdSection_ItemSubText>

          <Style.ThirdSection_ItemBigText>
            Showcase your strengths through detailed profiles for job seekers
            and compelling employer branding, elevating your online presence.
          </Style.ThirdSection_ItemBigText>
        </Style.ThirdSection_SecondItemDiv>

        <Style.ThirdSection_SecondItemDiv>
          <Style.ThirdSection_ImagesDiv>
            <IoMdHeadset style={{ color: "blue" }} />
          </Style.ThirdSection_ImagesDiv>

          <Style.ThirdSection_ItemSubText>
            Outstanding Support
          </Style.ThirdSection_ItemSubText>

          <Style.ThirdSection_ItemBigText>
            Our dedicated customer support team is ready to assist you at every
            step, providing top-notch service to job seekers and employers
            alike.
          </Style.ThirdSection_ItemBigText>
        </Style.ThirdSection_SecondItemDiv>
      </Style.ThirdSection_SecondContainer>
    </Style.ThirdSection>
  );
};

export default ThirdSection;
