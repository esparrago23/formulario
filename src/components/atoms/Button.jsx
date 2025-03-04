import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #0d53af;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: #06096a;
    }
`;

function Button({title,onclick}){
    return(
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}

export default Button;