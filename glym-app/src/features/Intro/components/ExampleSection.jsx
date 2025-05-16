import exampleImg from "../../../shared/EXAMPLE.png";
import { S } from "../style";

const exampleFont = ['LeebaekByGlym', 'Nahyun9ByGlym', 'ParkFeByGlym', 'ShapeAnByGlym'];

export default function ExampleSection() {
    return (
        <S.ExampleSection.Container>
            <S.ExampleSection.Title>글씨에 담긴 당신의 온기를 폰트로 간직하세요.</S.ExampleSection.Title>
            <S.ExampleSection.ExampleBox >
                {exampleFont.map((item, index)=> (
                    <S.ExampleSection.Example key={index}>
                        <S.ExampleSection.FontName>{item}</S.ExampleSection.FontName>
                        <S.ExampleSection.ExampleImg src={exampleImg} />
                    </S.ExampleSection.Example>
                ))}
            </S.ExampleSection.ExampleBox>
        </S.ExampleSection.Container>
    );
}