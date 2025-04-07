import { useState } from "react";
import { S } from "../style";

export default function SignUpInput({ value, type, required = true, onChange, showCheckButton = false, buttonValue, isDisabled, onCheck, onDomainChange, error = '' }) {
    const [errorMessage, setErrorMessage] = useState('');

    const emailDomains = [
        { value: "Gmail", label: "gmail.com" },
        { value: "Naver", label: "naver.com" },
        { value: "Daum", label: "daum.net" },
        { value: "Kakao", label: "kakao.com" },
        { value: "Outlook", label: "outlook.com" },
        { value: "Hotmail", label: "hotmail.com" },
        { value: "iCloud", label: "icloud.com" },
        { value: "Yahoo", label: "yahoo.com" },
        { value: "Nate", label: "nate.com" },
        { value: "Hanmail", label: "hanmail.net" }
      ];      

    return (
        <S.InputRow.Container>
            <S.InputRow.Label>{value}{required && (<span style={{ color: "#FF3F77" }}>*</span>)}</S.InputRow.Label>
            {showCheckButton ?
                (
                    <>
                        <div>
                            <div style={{ width: "250px", display: "flex", justifyContent: "space-between" }}>
                                <S.InputRow.Input type={type} onChange={onChange} onBlur={() => setErrorMessage(error)} />

                                <p style={{ margin: "auto 0", marginBottom: "15px" }}>@</p>

                                <select onChange={onDomainChange} style={{ width: "95px", height: "40px", borderRadius: "5px" }}>
                                    {emailDomains.map((domain) => (
                                        <option key={domain.value} value={domain.value}>
                                            {domain.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <S.InputRow.ErrorMessage>{errorMessage}</S.InputRow.ErrorMessage>
                        </div>
                        <S.InputRow.Button onClick={onCheck} disabled={isDisabled}>{buttonValue}</S.InputRow.Button>
                    </>
                )
                : (
                    <>
                        <div>
                            <S.InputRow.Input type={type} onChange={onChange} onBlur={() => setErrorMessage(error)} />
                            <S.InputRow.ErrorMessage>{errorMessage}</S.InputRow.ErrorMessage>
                        </div>
                        <span style={{ width: "100px", height: "40px" }}></span>
                    </>
                )}
        </S.InputRow.Container>
    )
};
