import AuthForm from "../features/auth/components/AuthForm";
import SuccessAlert from "../features/auth/components/SuccessAlert";

export default function SignInPage({ state: { signedUp = false} = {} }) {
    return (
        <>
            <div style={{ 
                marginTop: signedUp ? "10px" : "100px",
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {signedUp && <SuccessAlert />}
                <AuthForm />
            </div>
        </>
    );
}