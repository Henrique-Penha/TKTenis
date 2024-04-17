'use client';

import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import { Container } from "@/styles/util";

import Jordan from "../../../public/tenis-four.jpg";

const Product = () => {
    return(
        <StyledSec>
            <StyledColumns>
                <StyledImg src={Jordan} width={600} height={450} alt="" />

                <StyledCard>
                    <StyledTitle>Nome</StyledTitle>
                    <StyledPrice>Valor: R$2.000,00</StyledPrice>
                    <StyledFormat>10x de 200 sem juros</StyledFormat>
                    
                    <Link href="">
                        <StyledButton>Adicinar no Carrinho</StyledButton>
                    </Link>
                </StyledCard>
            </StyledColumns>

        </StyledSec>
    )
}

const StyledSec = styled.section`
    ${Container};
    background-color: black;
`;

const StyledColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 80px;
    gap: 50px;
`;

const StyledImg = styled(Image)`
    border-radius: 30px;
`;

const StyledCard = styled.div`
    width: 250px;
    height: 300px;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 30px;
    background-color: #D9D9D9;
    border-radius: 20px;
`;

const StyledTitle = styled.h1`
    padding-bottom: 30px;
`;

const StyledPrice = styled.h4`

`;

const StyledFormat = styled.h6`
    font-family: sans-serif;
    font-weight: 400;
`;

const StyledButton = styled.button`
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color: white;
    border-color: green;
    font-weight: 700;
    transition: 0.5s all ease;

    &:hover,
    &:active {
        background-color: black;
        color: white;
        border-color: blue;
    }
`;

export default Product;