import step1 from "../../../shared/STEP_1.png";
import step2 from "../../../shared/STEP_2.png";
import step3 from "../../../shared/STEP_3.png";
import step4 from "../../../shared/STEP_4.png";
import { S } from "../style";

export default function ProcessStepsSection() {
    return (
        <S.ProcessStepsSection.Container>
            <S.ProcessStepsSection.Textbox>
                <S.ProcessStepsSection.Title>GLYM은 6글자의 이미지 한장이면 충분합니다<br />
                    AI가 자동으로 글자 인식부터 폰트 생성까지 모두 처리합니다</S.ProcessStepsSection.Title>
                <S.ProcessStepsSection.SubTitle>업로드된 손글씨 이미지를 OCR 기반 딥러닝 모델이 분석해 글자 영역을 인식하고, 벡터화 과정을 거쳐 폰트(.ttf)로 자동 생성합니다.</S.ProcessStepsSection.SubTitle>
            </S.ProcessStepsSection.Textbox>
            <S.ProcessStepsSection.StepsBox>
                <S.ProcessStepsSection.Step src={step1} />
                <S.ProcessStepsSection.Step src={step2} />
                <S.ProcessStepsSection.Step src={step3} />
                <S.ProcessStepsSection.Step src={step4} />
            </S.ProcessStepsSection.StepsBox>
        </S.ProcessStepsSection.Container>
    );
}