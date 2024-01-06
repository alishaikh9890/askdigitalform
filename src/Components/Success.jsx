import React from "react";
import "./Form.css";
import styled from "styled-components";
import Submit from "../assets/submit.gif";
import Logo from "../assets/logoask.png";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import instagram from "./../assets/instagram.jpeg";
import youtube from "./../assets/youtube.jpeg";
import facebook from "./../assets/facebook.jpeg";
import linkedin from "./../assets/linkedin.jpeg";
import whatsapp from "./../assets/whatsapp.jpeg";
import twitter from "./../assets/twitter.jpeg";

import Banner from "./../assets/banner.jpeg";

const Sucess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > h2 {
    text-align: center;
    margin: 1% auto;
  }

  & > img{
   width:30%;
   margin: auto
  }

  & > div > img {
    width: 100%;
    margin: auto;
  }
`;

const StyleLink = styled(Link)`
  width: fit-content;
  margin: auto;
  margin-bottom:30px;

  & > Button {
    font-size: 15px;
  }
`;

const Success = () => {
  return (
    <Sucess>
      <div className="header">
        <img  src={Banner} alt="" />
      </div>

      <h2 style={{ fontFamily: "cursive" }}>
        {" "}
        Thank For Being Our Valued Customer
      </h2>

      <img src={Submit} alt=""/>

      <StyleLink to={"/"}>
        <Button variant="contained" color="success">
          Back To Home
        </Button>
      </StyleLink>

      <div className="footer">
        <a href="https://www.facebook.com/people/Ask-Digital-Solutions/100083113333301/">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.instagram.com/ask_digital.solution/">
          {" "}
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/ask-digital-solution/">
          {" "}
          <img src={linkedin} alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UC9dwS-U9WAnvn9z3w6QlAyQ">
          {" "}
          <img src={youtube} alt="" />
        </a>
        <a href="https://wa.me/+9960550864">
          {" "}
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://twitter.com/askdigitalsolu2">
          {" "}
          <img src={twitter} alt="" />
        </a>
      </div>
    </Sucess>
  );
};

export default Success;
