import styled from "styled-components";
import { font } from "../../styles/font";
import ProcessStepsSection from "./components/ProcessStepsSection";

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

// ProcessStepsSection
const StepContainer = styled.div`
    max-width: 1920px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;
`;

const Textbox = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    @media (max-width: 1600px) {
        width: 800px;
        word-break: keep-all;
    }
    text-align: left;
    margin-bottom: 100px;
    gap: 20px;
`;

const StepTitle = styled.h1`
    text-align: left;

    ${font(50, 500, 1.2)}
    @media (max-width: 1600px) {
        ${font(40, 500, 1.2)}
    }
`;

const SubTitle = styled.p`
    ${font(25, 400, 1.2)}
    color: #929292;
`;

const StepsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Step = styled.img`
    width: 400px;
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
    ProcessStepsSection: {
        Container: StepContainer,
        Title: StepTitle,
        Textbox,
        SubTitle,
        StepsBox,
        Step,
    },
};