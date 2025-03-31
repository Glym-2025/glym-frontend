import { S } from "../style";

export default function SignUpInput({ value, type, required = true, onChange, showCheckButton = false, buttonValue, onCheck }) {
    return (
        <S.InputRow.Container>
            <S.InputRow.Label>{value}{required && (<span style={{ color: "#FF3F77" }}>*</span>)}</S.InputRow.Label>

            <S.InputRow.Input type={type} onChange={onChange} />

            {showCheckButton ?
                (<S.InputRow.Button onClick={onCheck}>{buttonValue}</S.InputRow.Button>)
                : (<span style={{ width: "100px", height: "40px" }}></span>)}
        </S.InputRow.Container>
    )
};
