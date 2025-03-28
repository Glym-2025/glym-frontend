import { font } from "../../styles/font";
import logo from "../../shared/GLYM_LOGO.png"

export default function AuthForm() {
    return (
        <>
            <div>
                <img src={logo} alt="glym_logo" width="116px"></img>
                <div>
                    <input type="text"/>
                    <input type="password"/>
                </div>

                <button>로그인</button>

                <div>
                    <button>회원가입</button>
                    <button>아이디 찾기</button>
                    <button>비밀번호 찾기</button>
                </div>

                <hr />

                <button>카카오 로그인</button>
            </div>
        </>
    );
}