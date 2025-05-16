import styled from "styled-components";

const Container = styled.div`
    max-width: 1920px;
    width: fit-content;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    margin: auto;
    gap: 60px;
`;

const IntroImg = styled.img`
    width: 800px;
`;

const VideoWithBenefitBox = styled.div`
    width: fit-content;
    
    display: flex;
    flex-direction: column;
`;

const Video = styled.div`
    min-height: 500px;
    width: 800px;
    flex: 1;
    
    background-color: black;

`;

const BenefitImg = styled.img`
    width: 800px;
`;

export const S = {
    IntroSection: {
        Container,
        IntroImg,
        VideoWithBenefitBox,
        Video,
        BenefitImg
    },
};