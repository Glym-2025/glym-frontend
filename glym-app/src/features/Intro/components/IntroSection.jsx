import intro1 from "../../../shared/INTRO_1.png";
import intro2 from "../../../shared/INTRO_2.png";
import { S } from "../style";

export default function IntroSection() {
    return (
        <S.IntroSection.Container>
            <S.IntroSection.IntroImg src={intro1} />
            <S.IntroSection.VideoWithBenefitBox>
                <S.IntroSection.Video>영상</S.IntroSection.Video>
                <S.IntroSection.BenefitImg src={intro2} />
            </S.IntroSection.VideoWithBenefitBox>
        </S.IntroSection.Container>
    );
}