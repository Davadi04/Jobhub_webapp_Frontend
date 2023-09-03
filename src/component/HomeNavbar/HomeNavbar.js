import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { country_list } from "../../ListOfCountries";
import { AiOutlineSetting } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import {
  AUTH,
  END_LOADING,
  LOGOUT,
  START_LOADING,
} from "../../constants/actionType";
import { SignIn } from "../SignIn/style";
import { Signin, getProfileById, getProfileData } from "../../action/auth";
import { useParams } from "react-router-dom";
import { getApplyJobs, getPostBySearch } from "../../action/jobs";
import { BsBuildingCheck, BsBuildingFillCheck } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";

const HomeNavbar = ({
  search,
  setSearch,
  toggleHomePagePopup,
  settoggleHomePagePopup,
}) => {
  const { id } = useParams;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );
  const { authData } = useSelector((state) => state.auth);
  const [toggleNavHeader, setToggleNavHeader] = useState("home");

  console.log(user);
  console.log(authData);
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, []);

  //  if (user == undefined) return null;

  const handleChangeIcon = () => {
    setToggle(!toggle);
  };

  const handleSearchItem = (e) => {
    e.preventDefault();

    if (search.searchInput) {
      dispatch(getPostBySearch(search, navigate));
    }
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    setSearch({
      ...search,
      searchInput: "",
    });

    setToggle(false);
    navigate("/");
  };

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

  console.log(toggleHomePagePopup);

  const handleNavBar = () => {
    settoggleHomePagePopup(true);
    console.log("see");
  };

  const handleJobPost = () => {
    setToggleNavHeader("home");
    setToggle(false);
    navigate(`/account/home/${authData?.result._id}`);
  };

  const handleSavedJobs = () => {
    const id = authData?.result._id;
    dispatch(getProfileData(id, navigate));

    dispatch({ type: "CLEARERRORSAVEDITEM" });

    setToggleNavHeader("savedjob");
    setToggle(false);
    console.log(authData);
  };

  const handleClickAccountingSetting = () => {
    setToggle(false);
    navigate(`/account/accountsetting/${authData?.result._id}`);
  };

  const handleClickCareerProfile = () => {
    setToggle(false);
    navigate("/account/careerprofile");
  };

  const handleApplyJobs = () => {
    const id = authData?.result._id;
    dispatch(getApplyJobs(id, navigate));
    setToggleNavHeader("appliedjob");
    setToggle(false);
  };

  return (
    <Style.HomeNavbar>
      <Style.HomeNavbar_HeadContainer>
        <Link
          to={
            authData?.result.bio
              ? `/account/home/${authData?.result._id}`
              : authData?.result.CompanyWebsite
              ? `/account/home/${authData?.result._id}`
              : "/"
          }
          style={{ textDecoration: "none" }}
        >
          <Style.HomeNavbar_HeaderIconDiv onClick={handleJobPost}>
            <Style.HomeNavbar_HeaderImagecontainer>
              <Style.HomeNavbar_HeaderImage
                src={require("../../image/Logomark.png")}
                alt="img"
              />
            </Style.HomeNavbar_HeaderImagecontainer>

            <Style.HomeNavbar_HeadText>JobHub</Style.HomeNavbar_HeadText>
          </Style.HomeNavbar_HeaderIconDiv>
        </Link>

        {authData?.result.bio && authData?.result.field == "customer" && (
          <>
            <Style.HomeNavbar_HeadPara
              onClick={handleJobPost}
              className={toggleNavHeader == "home" && "navbartoggle"}
            >
              Home
            </Style.HomeNavbar_HeadPara>

            <Style.HomeNavbar_HeadPara
              onClick={handleApplyJobs}
              className={toggleNavHeader == "appliedjob" && "navbartoggle"}
            >
              Applied Job
            </Style.HomeNavbar_HeadPara>

            <Style.HomeNavbar_HeadPara
              onClick={handleSavedJobs}
              className={toggleNavHeader == "savedjob" && "navbartoggle"}
            >
              Saved Job
            </Style.HomeNavbar_HeadPara>
            {toggleNavHeader == "home" && (
              <Style.HomeNavbar_InputAndButton onSubmit={handleSearchItem}>
                <Style.HomeNavbar_Input
                  placeholder="Search By Role"
                  name="searchInput"
                  onChange={(e) =>
                    setSearch({
                      ...search,
                      searchInput: e.target.value,
                    })
                  }
                  value={search.searchInput}
                  type="text"
                />
              </Style.HomeNavbar_InputAndButton>
            )}
          </>
        )}

        {authData?.result.CompanyWebsite &&
          authData?.result.field == "employer" && (
            <>
              <Style.HomeNavbar_HeadPara
                onClick={handleJobPost}
                className={toggleNavHeader == "home" && "navbartoggle"}
              >
                Job Post
              </Style.HomeNavbar_HeadPara>
            </>
          )}

        <Style.HomeNavbar_AllProfileItems>
          {authData?.result.bio && (
            <>
              <Style.HomeNavbar_ProfileContainerHolder
                onClick={handleChangeIcon}
              >
                <Style.HomeNavbar_ProfileImgDiv>
                  {authData?.result.fullName.substring(0, 1)}
                </Style.HomeNavbar_ProfileImgDiv>

                <Style.HomeNavbar_HeadSubPara style={{ color: "black" }}>
                  {authData?.result.fullName || authData.result.fullName}
                </Style.HomeNavbar_HeadSubPara>

                {toggle ? <BiDownArrow /> : <BiUpArrow />}
              </Style.HomeNavbar_ProfileContainerHolder>
            </>
          )}

          {authData?.result.CompanyWebsite && (
            <>
              <Style.HomeNavbar_ProfileContainerHolder
                onClick={handleChangeIcon}
              >
                <Style.HomeNavbar_ProfileImgDiv>
                  {authData?.result.fullName.substring(0, 1) ||
                    authData.result.fullName.substring(0, 1)}
                </Style.HomeNavbar_ProfileImgDiv>

                <Style.HomeNavbar_HeadPara style={{ color: "black" }}>
                  {authData?.result.fullName || authData.result.fullName}
                </Style.HomeNavbar_HeadPara>

                {toggle ? <BiDownArrow /> : <BiUpArrow />}
              </Style.HomeNavbar_ProfileContainerHolder>
            </>
          )}

          {authData == null && (
            <Style.HomeNavbar_LoginAndSignUpButtonDiv>
              <Style.HomeNavbar_LoginAndSignUpButton
                variant="outlined"
                onClick={() => navigate("/account/signIn")}
              >
                Login
              </Style.HomeNavbar_LoginAndSignUpButton>

              <Style.HomeNavbar_LoginAndSignUpButton
                variant="contained"
                onClick={() => handleNavBar()}
              >
                Sign Up
              </Style.HomeNavbar_LoginAndSignUpButton>
            </Style.HomeNavbar_LoginAndSignUpButtonDiv>
          )}
          {toggle && (
            <Style.HomeNavbar_AccountProfileDiv>
              <Style.HomeNavbar_ProfileInnerItem
                onClick={handleClickAccountingSetting}
              >
                <AiOutlineSetting />
                <Style.HomeNavbar_ProfileInnerItemPara>
                  Account Setting
                </Style.HomeNavbar_ProfileInnerItemPara>
              </Style.HomeNavbar_ProfileInnerItem>
              <Style.HomeNavbar_ProfileInnerItem
                onClick={handleClickCareerProfile}
              >
                <GoPerson />

                <Style.HomeNavbar_ProfileInnerItemPara>
                  Career Profile
                </Style.HomeNavbar_ProfileInnerItemPara>
              </Style.HomeNavbar_ProfileInnerItem>
              {authData?.result.bio && (
                <Style.HomeNavBar_Lock>
                  <Style.HomeNavbar_ProfileInnerItem onClick={handleSavedJobs}>
                    <MdOutlineSaveAlt />
                    <Style.HomeNavbar_ProfileInnerItemPara>
                      Saved Job
                    </Style.HomeNavbar_ProfileInnerItemPara>
                  </Style.HomeNavbar_ProfileInnerItem>
                  <Style.HomeNavbar_ProfileInnerItem onClick={handleApplyJobs}>
                    <BsBuildingCheck />
                    <Style.HomeNavbar_ProfileInnerItemPara>
                      Applied Job
                    </Style.HomeNavbar_ProfileInnerItemPara>
                  </Style.HomeNavbar_ProfileInnerItem>
                </Style.HomeNavBar_Lock>
              )}
              <Style.HomeNavbar_ProfileInnerItem>
                <RxExit />

                <Style.HomeNavbar_ProfileInnerItemPara onClick={handleLogout}>
                  Log out
                </Style.HomeNavbar_ProfileInnerItemPara>
              </Style.HomeNavbar_ProfileInnerItem>
            </Style.HomeNavbar_AccountProfileDiv>
          )}
        </Style.HomeNavbar_AllProfileItems>
      </Style.HomeNavbar_HeadContainer>
    </Style.HomeNavbar>
  );
};

export default HomeNavbar;
