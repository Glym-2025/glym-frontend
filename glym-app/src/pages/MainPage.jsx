import { useEffect, useRef } from "react";
import { IntroSection, ExampleSection, ProcessStepsSection } from "../features/Intro";
import { S } from "./style";

export default function MainPage() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const scrollSteps = [1, 2, 0];
        let current = 0;

        const timer = setInterval(() => {
            if (!wrapperRef.current) return;

            const targetY = scrollSteps[current] * window.innerHeight;

            wrapperRef.current.scrollTo({
                top: targetY,
                behavior: 'smooth',
            });

            current++;
            if (current >= scrollSteps.length) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <S.MainPage.Wrapper ref={wrapperRef}>
            <S.MainPage.Section><IntroSection /></S.MainPage.Section>
            <S.MainPage.Section><ExampleSection /></S.MainPage.Section>
            <S.MainPage.Section><ProcessStepsSection /></S.MainPage.Section>
        </S.MainPage.Wrapper>
    );
}