'use client';

import styled from "styled-components";

import Image from "next/image";
import Tenis from "../../../public/tenis-four.jpg";
import { Container } from "@/styles/util";
import Link from "next/link";


const Hero = () => {

    return(
            <StyledSec>
                    <StyledImg src={Tenis} width={750} height={500} alt="Tenis" />
                <StyledPos>
                    <StyledCard>
                        <StyledText>
                            Os melhores tênis, das melhores marcas só aqui na TKTenis.
                            <br/>Aproveite as ofertas super imperdiveis !!!
                        </StyledText>
                        <StyledButton type="button">
                            <Link href="/product">Veja Aqui</Link>
                        </StyledButton>
                    </StyledCard>
                </StyledPos>      
            </StyledSec>
    )
}

const StyledSec = styled.section`
    ${Container};
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: black;
`;

const StyledImg = styled(Image)`
    margin-left: 100px;
    border-radius: 10%;
`;

const StyledPos = styled.div`
    display: flex;
    position: absolute;
    right: 150px;
    max-width: 300px;
    min-height: 300px;
`;

const StyledCard = styled.div`
    background-color: white;
    border-radius: 10%;
    padding: 30px;
`;

const StyledText = styled.p`
    text-align: justify;
    margin: 40px 20px 20px 20px;
`;

const StyledButton = styled.button`
    display: flex;
    margin: 0px 0px 0px 60px;
    padding: 10px 20px;
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

export default Hero;