import SignUpInput from "./SignUpInput"

export default function SignUpForm() {
    return (
        <>
            <div>
                <h1>회원가입</h1>
                <p><span>*</span>필수입력사항</p>
                
                <hr />

                <SignUpInput
                    value="이메일"
                    type="email"
                    onChange={() => console.log()}
                />
                <SignUpInput
                    value="비밀번호"
                    type="password"
                    onChange={() => console.log()}
                />
                <SignUpInput
                    value="비밀번호 확인"
                    type="password"
                    onChange={() => console.log()}
                />
                <SignUpInput
                    value="이름"
                    type="text"
                    onChange={() => console.log()}
                />
                <SignUpInput
                    value="휴대폰"
                    type="text"
                    onChange={() => console.log()}
                    showCheckButton="true"
                    buttonValue="인증번호 받기"
                    onCheck={() => console.log()}
                />
                <SignUpInput
                    value="인증번호"
                    type="text"
                    onChange={() => console.log()}
                    showCheckButton="true"
                    buttonValue="확인"
                    onCheck={() => console.log()}
                />
                
                <hr />
                
                <div>
                    <p>이용약관동의<span>*</span></p>
                    <div>
                        <p>전체 동의합니다.</p>
                        <p>선택 항목에 대한 동의는 거부하셔도 서비스 이용에 제한이 없습니다.</p>
                    </div>
                    <div>[필수] <button>서비스 이용약관</button>에 동의합니다.</div>
                    <div>[필수] <button>개인정보 수집 및 이용</button>에 동의합니다.</div>
                    <div>[필수] 본인은 만 14세 이상입니다.</div>
                    <div>[선택] 마케팅 정보 수신에 동의합니다.</div>  
                </div>

                <button>가입하기</button>
            </div>
        </>
    );
}