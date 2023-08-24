import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CareerProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );
  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, []);

  console.log(user);
  console.log(authData);

  return (
    <Style.CareerProfile>
      <Style.CareerProfile_BlueHeader></Style.CareerProfile_BlueHeader>

      <Style.CareerProfile_BodyContainer>
        <Style.CareerProfile_Body>
          {!user?.result.CompanyRepresentative && (
            <>
              <Style.CareerProfile_HeaderDiv>
                <Style.CareerProfile_NameAndRole>
                  <Style.CareerProfile_NameBox>
                    <Style.CareerProfile_NameBoxText>
                      {user?.result.fullName.substring(0, 1) ||
                        authData.result.fullName.substring(0, 1)}
                    </Style.CareerProfile_NameBoxText>
                  </Style.CareerProfile_NameBox>

                  <Style.CareerProfile_RoleText>
                    <Style.CareerProfile_RoleText>
                      {user?.result.fullName || authData?.result.fullName}
                    </Style.CareerProfile_RoleText>
                    <Style.CareerProfile_RoleSubText>
                      {user?.result.Role || authData?.result.Role}
                    </Style.CareerProfile_RoleSubText>
                  </Style.CareerProfile_RoleText>
                </Style.CareerProfile_NameAndRole>

                <Style.CareerProfile_HeaderText>
                  <span style={{ fontWeight: "bold" }}>Email</span> :{" "}
                  {user?.result.email || authData?.result.email}
                </Style.CareerProfile_HeaderText>

                <Style.CareerProfile_HeaderText>
                  <span style={{ fontWeight: "bold" }}>PhoneNumber</span> :{" "}
                  {user?.result.PhoneNumber || authData?.result.PhoneNumber}
                </Style.CareerProfile_HeaderText>
                <Style.CareerProfile_HeaderText>
                  <span style={{ fontWeight: "bold" }}>Portfolio</span> :{" "}
                  {user?.result.Portfolio || authData?.result.Portfolio}
                </Style.CareerProfile_HeaderText>
                <Style.CareerProfile_HeaderText>
                  <span style={{ fontWeight: "bold" }}>Linkedin</span> :{" "}
                  {user?.result.Linkedin || authData?.result.Linkedin}
                </Style.CareerProfile_HeaderText>
              </Style.CareerProfile_HeaderDiv>

              <Style.CareerProfile_ProfileMain>
                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Summary
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.Summary || authData?.result.Summary}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Experience
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.Experience || authData?.result.Experience}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Education
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.Education || authData?.result.Education}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Skills
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.Skills || authData?.result.Skills}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>
              </Style.CareerProfile_ProfileMain>
            </>
          )}

          {user?.result.CompanyRepresentative && (
            <>
              <Style.CareerProfile_HeaderDiv>
                <Style.CareerProfile_NameAndRole>
                  <Style.CareerProfile_NameBox>
                    <Style.CareerProfile_NameBoxText>
                      {user?.result.fullName.substring(0, 1) ||
                        authData.result.fullName.substring(0, 1)}
                    </Style.CareerProfile_NameBoxText>
                  </Style.CareerProfile_NameBox>

                  <Style.CareerProfile_RoleText>
                    <Style.CareerProfile_RoleText>
                      {user?.result.fullName || authData?.result.fullName}
                    </Style.CareerProfile_RoleText>
                    <Style.CareerProfile_RoleSubText>
                      {user?.result.CompanyRepresentative ||
                        authData?.result.CompanyRepresentative}
                    </Style.CareerProfile_RoleSubText>
                  </Style.CareerProfile_RoleText>
                </Style.CareerProfile_NameAndRole>

                <Style.CareerProfile_HeaderText>
                  <span style={{ fontWeight: "bold" }}>Email</span> :{" "}
                  {user?.result.email || authData?.result.email}
                </Style.CareerProfile_HeaderText>
              </Style.CareerProfile_HeaderDiv>

              <Style.CareerProfile_ProfileMain>
                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    About Company
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.AboutCompany || authData?.result.AboutCompany}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Address
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.Address || authData?.result.Address}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Company Size
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.CompanySize || authData?.result.CompanySize}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>

                <Style.CareerProfile_ProfileMainItemDiv>
                  <Style.CareerProfile_ProfileMainItemHeader>
                    Company Website
                  </Style.CareerProfile_ProfileMainItemHeader>

                  <Style.CareerProfile_ProfileMainItemText>
                    {user?.result.CompanyWebsite ||
                      authData?.result.CompanyWebsite}
                  </Style.CareerProfile_ProfileMainItemText>
                </Style.CareerProfile_ProfileMainItemDiv>
              </Style.CareerProfile_ProfileMain>
            </>
          )}
        </Style.CareerProfile_Body>
      </Style.CareerProfile_BodyContainer>
    </Style.CareerProfile>
  );
};

export default CareerProfile;
