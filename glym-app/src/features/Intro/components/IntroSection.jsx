import intro1 from "../../../shared/INTRO_1.png";
import intro2 from "../../../shared/INTRO_2.png";

export default function IntroSection() {
    return (
        <div>
            <img src={intro1} />
            <div>
                <div>영상</div>
                <img src={intro2} />
            </div>
        </div>
    );
}