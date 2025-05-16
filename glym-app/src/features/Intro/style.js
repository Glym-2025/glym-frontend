import styled from "styled-components";
import { font } from "../../styles/font";

// IntroSection
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

// ExampleSection
const ExampleContainer = styled.div`
    max-width: 1920px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
    gap: 80px;
`;

const Title = styled.h1`
    ${font(50, 500, 1.5)}
    color: #FF3F77;
`;

const ExampleBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`;

const Example = styled.div`
    max-width: 800px;
    width: fit-content;
    flex: 1 1 calc(50% - 20px);

    padding: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
`;

const FontName = styled.p`
    ${font(24, 400, 1.5)}
    margin-bottom: 10px;
`;

const ExampleImg = styled.img`
    width: 750px;
`;

export const S = {
    IntroSection: {
        Container,
        IntroImg,
        VideoWithBenefitBox,
        Video,
        BenefitImg
    },
    ExampleSection: {
        Container: ExampleContainer,
        Title,
        ExampleBox,
        Example,
        FontName,
        ExampleImg,
    },
};