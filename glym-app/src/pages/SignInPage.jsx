import { useState, useEffect } from "react";
import AuthForm from "../features/auth/components/AuthForm";
import SuccessAlert from "../features/auth/components/SuccessAlert";

export default function SignInPage({ state: { signedUp = false } = {} }) {
    const [isSignedUp, setIsSignedUp] = useState(signedUp);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSignedUp(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div style={{ 
                marginTop: isSignedUp ? "20px" : "100px",
                gap: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {isSignedUp && <SuccessAlert />}
                <AuthForm />
            </div>
        </>
    );
}