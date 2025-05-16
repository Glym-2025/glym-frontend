import step1 from "../../../shared/STEP_1.png";
import step2 from "../../../shared/STEP_2.png";
import step3 from "../../../shared/STEP_3.png";
import step4 from "../../../shared/STEP_4.png";

export default function ProcessStepsSection() {
    return (
        <div>
            <h1>GLYM은 6글자의 이미지 한장이면 충분합니다\n
                AI가 자동으로 글자 인식부터 폰트 생성까지 모두 처리합니다</h1>
            <p>업로드된 손글씨 이미지를 OCR 기반 딥러닝 모델이 분석해 글자 영역을 인식하고, 벡터화 과정을 거쳐 폰트(.ttf)로 자동 생성합니다.</p>
            <div>
                <img src={step1} />
                <img src={step2} />
                <img src={step3} />
                <img src={step4} />
            </div>
        </div>
    );
}