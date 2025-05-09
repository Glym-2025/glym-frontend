import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthForm from "../features/auth/components/AuthForm";
import SuccessAlert from "../features/auth/components/SuccessAlert";

export default function SignInPage() {
    const location = useLocation();
    const signedUpFromState = location.state?.signedUp ?? false;

    const [isSignedUp, setIsSignedUp] = useState(signedUpFromState);

    useEffect(() => {
        if (!signedUpFromState) return;

        const timer = setTimeout(() => {
            setIsSignedUp(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [signedUpFromState]);

    return (
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
    );
}