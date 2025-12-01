import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";

const messages = [
    "Как всегда, поймала моё сердце! 💘",
    "О нет, ты слишком быстрая! 😍",
    "Ну вот, опять влюбился... 💕",
    "Ты моя охотница за сердцами! 🎯",
    "Хватит воровать моё сердце! 😂",
];

const CatchTheHeart = () => {
    const [score, setScore] = useState(0);
    const [position, setPosition] = useState({top: "50%", left: "50%"});
    const [isClicked, setIsClicked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    const moveHeart = () => {
        const newTop = Math.floor(Math.random() * 80) + "%";
        const newLeft = Math.floor(Math.random() * 80) + "%";
        setPosition({top: newTop, left: newLeft});
        setIsClicked(false);
    };

    const handleClick = () => {
        setScore(score + 1);
        setIsClicked(true);
        setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
            moveHeart();
        }, 1000); // Сообщение исчезает через 1 секунду
    };

    useEffect(() => {
        moveHeart(); // Переместить сердце в случайное место при загрузке
    }, []);

    return (
        <>
            <ContentText>

                Чтобе не скучала вот тебе игра 😂<br/>
                "Сердце на свободе! Лови, пока не сбежало!" 🏃‍♂️💨💔
            </ContentText>

            <GameContainer>
                <Score>Счёт: {score}</Score>
                <Heart
                    style={{top: position.top, left: position.left}}
                    onClick={handleClick}
                    className={isClicked ? "clicked" : ""}
                >
                    💖
                </Heart>
                {showMessage && <FullScreenMessage>{currentMessage}</FullScreenMessage>}
            </GameContainer>
        </>
    );
};

const GameContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #ffe0e6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Score = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #d6336c;
    font-family: "BKANTKZ", Arial, sans-serif;
`;

const Heart = styled.div`
    position: absolute;
    font-size: 32px;
    cursor: pointer;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.clicked {
        transform: scale(1.5);
        opacity: 0;
    }
`;

const FullScreenMessage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    font-size: 20px;
    font-family: "BKANTKZ", Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    z-index: 10;
    animation: fadeOut 1s ease-in-out forwards;

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  line-height: 160%;
  font-weight: 200;
  text-align: start;
    padding: 0 10px;
  font-size: 18px;
  margin: 0;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export default CatchTheHeart;
