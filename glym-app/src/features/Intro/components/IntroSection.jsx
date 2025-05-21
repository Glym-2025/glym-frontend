import intro1 from "../../../shared/INTRO_1.png";
import intro2 from "../../../shared/INTRO_2.png";
import { S } from "../style";
import videoImg from "../../../shared/VIDEOIMG.png";

export default function IntroSection() {
    return (
        <S.IntroSection.Container>
            <S.IntroSection.IntroImg src={intro1} />
            <S.IntroSection.VideoWithBenefitBox>
                <S.IntroSection.Video><img src={videoImg} style={{width: '100%'}}/></S.IntroSection.Video>
                <hr style={{width: '100%', height: '5px', backgroundColor: "#FFFFFF", border: 'none'}}/>
                <S.IntroSection.BenefitImg src={intro2} />
            </S.IntroSection.VideoWithBenefitBox>
        </S.IntroSection.Container>
    );
}