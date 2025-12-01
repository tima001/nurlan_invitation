import "./App.css";
import PhotoWithHeader from "./pages/PhotoWithHeader";
import TimerWithPhoto from "./pages/TimerWithPhoto";
import InvitationText from "./pages/InvitationText";
import styled from "@emotion/styled";
import line from "./img/LineBg.png";
import LastText from "./pages/LastText";
import CatchTheHeart from "./pages/Game";

function Components() {
    return (
        <ContentWrapper>
            <PhotoWithHeader/>
            <InvitationText/>
            <BackgroundLine src={line} alt="Background line "/>
            {/*<RoadMapContent/>*/}
            <TimerWithPhoto/>
            <BackgroundLine src={line} alt="Background line "/>
            <LastText/>
            <BackgroundLine src={line} alt="Background line "/>
            <CatchTheHeart/>
        </ContentWrapper>
    );
}

export default Components;

const ContentWrapper = styled.div`
    position: relative;
    top: -64px;
    display: flex;
    flex-direction: column;
    gap: 48px;
        /* background-image: url(${require("./img/425bg.png")}); */
    background-repeat: repeat;
    background-size: cover;

    @media (max-width: 425px) {
        background-size: auto;
    }
`;
const BackgroundLine = styled.img`
    width: 100%;
`;
