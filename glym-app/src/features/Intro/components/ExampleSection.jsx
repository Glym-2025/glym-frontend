import exampleImg from "../../../shared/EXAMPLE.png";

export default function ExampleSection() {
    return (
        <div>
            <h1>글씨에 담긴 당신의 온기를 폰트로 간직하세요.</h1>
            <div>
                <div>
                    <p>GlymLeebaek</p>
                    <img src={exampleImg}/>
                </div>
            </div>
        </div>
    );
}