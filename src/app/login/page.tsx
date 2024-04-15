'use client';

import styled from "styled-components";
import ILogin from "../../../public/tenis-login.jpg";
import Image from "next/image";
import Link from "next/link";


const Login = () => {

    return(
        <StyledContainer>
                <StyledImg src={ILogin} alt="fundo"/>
                <StyledCard>
                    <StyledTitle>Login</StyledTitle>
                    <StyledInf>
                        <StyledText>Email</StyledText><StyledInput type="email" name="" id="" />
                        <StyledText>Senha</StyledText><StyledInput type="password" name="" id="" />
                    </StyledInf>
                        <StyledLink>Não tem cadastro? <Link href="">Cadastre-se aqui.</Link></StyledLink>
                        <SyledButton type="button" value="Entrar">Entrar</SyledButton>
                </StyledCard>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    
`;

const StyledImg = styled(Image)`
    width: 100vw;
    height: 100vh;
`;

const StyledCard = styled.div`
    display: grid;
    position: absolute;
    justify-items: center;
    justify-content: space-evenly;
    top: 40vh;
    right: 20vw;
    width: 300px;
    height: 350px;
    background-color: black;
    color: white;
    border-radius: 10%;
    padding: 20px;
`;

const StyledTitle = styled.h1`
    font-size: 30px;
    padding: 10px;
`;

const StyledInf = styled.div`
    display: grid;
`;

const StyledInput = styled.input`
    border-radius: 20px;
    width: 250px;
    height: 40px;
    padding: 20px;
`;

const StyledText = styled.h3`
    height: 13px;
    padding: 0px 0px 14px 10px;
`;

const StyledLink = styled.h6`
    font-family: sans-serif;
    font-weight: 400;
`;

const SyledButton = styled.button`
    width: 150px;
    height: 35px;
    border-radius: 20px;
    cursor: pointer;
    background-color: pink;
    border-color: green;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s all ease;

    &:hover,
    &:active {
        background-color: black;
        color: white;
        border-color: blue;
    }
`;

export default Login;