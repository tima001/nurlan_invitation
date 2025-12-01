import React from "react";
import styled from "@emotion/styled";

const InvitationText = () => {
  return (
    <TextContentWrapper>
      <TitleText>
          Дорогая Ағжан<br/><br/>
          Искренне хочу пригласить тебя провести со мной особенный вечер.
      </TitleText>
    </TextContentWrapper>
  );
};

export default InvitationText;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;



const TitleText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #a11b14;
  font-size: 19px;
  text-align: start;
  font-weight: 600;
    padding: 0 20px;
`;
