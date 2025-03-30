import styled from "styled-components"
import { font } from "../../styles/font"

const Container = styled.div`
    width: 500px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const P = styled.p`
    width: 100px;
    height: 40px;

    display: flex;
    align-items: center;
    margin: auto 0;

    font-size: 16px;
    color: #222222;
`;

const Span = styled.span`
    box-sizing: border-box;
    
`;

const Input = styled.input`
    width: 250px;
    height: 40px;
    box-sizing: border-box;

    padding: 0 10px 0 10px;

    border: 1px solid #929292;
    border-radius: 5px;

    ${font(16, 400, 1.5)}

    &:focus {
        outline: none;
        border: 1px solid #FF3F77;
    }
`;

const Button = styled.button`
    width: 100px;
    height: 40px;

    margin-left: 20px;

    ${font(14, 400, 1.5)}
    color: #929292;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid #929292;
`;

const S = {
    Container, P, Span, Input, Button
};

export default function SignUpInput({ value, type, required = true, onChange, showCheckButton = false, buttonValue, onCheck }) {
    return (
        <S.Container>
            <S.P>{value}{required && (<span style={{ color: "#FF3F77" }}>*</span>)}</S.P>

            <S.Input type={type} onChange={onChange} />

            {showCheckButton ?
                (<S.Button onClick={onCheck}>{buttonValue}</S.Button>)
                : (<span style={{ width: "100px", height: "40px", boxSizing: "border-box", marginLeft: "20px" }}></span>)}
        </S.Container>
    )
};
