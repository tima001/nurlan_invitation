import React from "react";
import styled from "@emotion/styled";
const PhotoWithHeader = () => {
  return (
    <ContentWrapper>

      <MainTitleName>💌 ТВОЁ ОСОБОЕ ПРИГЛАШЕНИЕ 💌</MainTitleName>

      <MainTitleDate>02.12.2025</MainTitleDate>
    </ContentWrapper>
  );
};

export default PhotoWithHeader;

const MainTitleName = styled.div`
  font-family: "Romulc",serif;
  width: 100%;
  align-items: center;
  @media (max-width: 440px) {
    font-weight: 200;
    position: absolute;
    font-size: 26px;
    color: #fff;

    margin-top: 400px;
    text-align: center;
  }
  @media (max-width: 320px) {
    font-size: 24px;
    margin-top: 380px;
      text-align: center;
      
  }
`;


const MainTitleDate = styled.div`
  @media (max-width: 440px) {
    position: absolute;
    font-family: "Romulc", Arial, sans-serif;
    font-size: 28px;
    font-weight: 200;
    color: #fff;
    width: 100%;
    align-items: center;
    margin-top: 510px;
    text-align: center;
  }
  @media (max-width: 320px) {
    font-size: 26px;
    margin-top: 460px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
  }
  @media (max-width: 440px) {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${require("../img/mainPhoto.gif")});
    height: 650px;
    width: 100%;
    background-size: 100%;
  }
  @media (max-width: 375px) {
    background-size: 100% !important;
    height: 580px;
  }
  @media (max-width: 320px) {
    height: 520px;
  }
`;
