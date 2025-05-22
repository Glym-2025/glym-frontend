import exampleImg1 from "../../../shared/ex1.png";
import exampleImg2 from "../../../shared/ex2.png";
import exampleImg3 from "../../../shared/ex3.png";
import exampleImg4 from "../../../shared/ex4.png";
import { S } from "../style";

export default function ExampleSection() {
    return (
        <S.ExampleSection.Container>
            <S.ExampleSection.Title>글씨에 담긴 당신의 온기를 폰트로 간직하세요.</S.ExampleSection.Title>
            <S.ExampleSection.ExampleBox >
                    <S.ExampleSection.Example>
                        <S.ExampleSection.ExampleImg src={exampleImg1} />
                    </S.ExampleSection.Example>
                    <S.ExampleSection.Example>
                        <S.ExampleSection.ExampleImg src={exampleImg2} />
                    </S.ExampleSection.Example>
                    <S.ExampleSection.Example>
                        <S.ExampleSection.ExampleImg src={exampleImg3} />
                    </S.ExampleSection.Example>
                    <S.ExampleSection.Example>
                        <S.ExampleSection.ExampleImg src={exampleImg4} />
                    </S.ExampleSection.Example>
            </S.ExampleSection.ExampleBox>
            <S.ExampleSection.FontName>이 이미지는 폰트의 이해를 돕기 위해 시각적으로 구성된 예시입니다</S.ExampleSection.FontName>
        </S.ExampleSection.Container>
    );
}