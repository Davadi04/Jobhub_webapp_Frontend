import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { BsFillTrash3Fill } from "react-icons/bs";
import { country_list } from "../../ListOfCountries";

const HomeBody = () => {
  const [showItem, setShowItem] = useState(false);

  const job_type = ["remote", "on-site", "hybrid"];
  const job_method = ["full time", "part time", "internship", "contract"];
  const salary_Range = [
    "0$-100",
    "101$-1000",
    "10001$-5000",
    "5001$-10000",
    "10001+",
  ];
  const experience_Range = ["entry/junior Level", "mid level", "senior level"];

  return (
    <Style.HomeBody>
      <Style.HomeBody_Conatainer>
        <Style.HomeBody_Navbar>
          <Style.HomeBody_Select select required>
            <Style.HomeBody_Option selected="true" disabled>
              Select Location
            </Style.HomeBody_Option>

            {country_list.map((data, index) => (
              <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
            ))}
          </Style.HomeBody_Select>

          <Style.HomeBody_Select select required>
            <Style.HomeBody_Option selected="true" disabled>
              Job Type
            </Style.HomeBody_Option>

            {job_type.map((data, index) => (
              <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
            ))}
          </Style.HomeBody_Select>

          <Style.HomeBody_Select select required>
            <Style.HomeBody_Option selected="true" disabled>
              Job Method
            </Style.HomeBody_Option>

            {job_method.map((data, index) => (
              <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
            ))}
          </Style.HomeBody_Select>

          <Style.HomeBody_Select select required>
            <Style.HomeBody_Option selected="true" disabled>
              Salary Range
            </Style.HomeBody_Option>

            {salary_Range.map((data, index) => (
              <Style.HomeBody_Option key={index}>{data}$</Style.HomeBody_Option>
            ))}
          </Style.HomeBody_Select>

          <Style.HomeBody_Select select required>
            <Style.HomeBody_Option selected="true" disabled>
              Experience
            </Style.HomeBody_Option>

            {experience_Range.map((data, index) => (
              <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
            ))}
          </Style.HomeBody_Select>

          <Style.HomeBody_SearchButton variant="contained">
            search job
          </Style.HomeBody_SearchButton>
        </Style.HomeBody_Navbar>

        {showItem && (
          <Style.HomeBody_NoJobContainer>
            <Style.HomeBody_NoJobContainerDiv>
              <Style.HomeBody_NoJobContainerDivPara>
                No Job Post
              </Style.HomeBody_NoJobContainerDivPara>
              <Style.HomeBody_NoJobContainerDivIconHolder>
                <BsFillTrash3Fill />
              </Style.HomeBody_NoJobContainerDivIconHolder>
            </Style.HomeBody_NoJobContainerDiv>
          </Style.HomeBody_NoJobContainer>
        )}
      </Style.HomeBody_Conatainer>
    </Style.HomeBody>
  );
};

export default HomeBody;
