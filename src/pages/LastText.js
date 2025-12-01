import React from "react";
import styled from "@emotion/styled";

const LastText = () => {
  return (
    <TextContentWrapper>
        <TitleText>
            Будут сюрпризы, улыбки и, конечно же, я – твой главный поклонник! 🎭<br/><br/>
        </TitleText>
    </TextContentWrapper>
  );
};

export default LastText;

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
  font-weight: 200;
    padding: 0 20px;
`;

