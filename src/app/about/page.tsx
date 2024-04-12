'use client';

import styled from "styled-components";
import Image from "next/image";

import Sport from "../../../public/tenis-about.jpg";
import { Container } from "@/styles/util";

const About = () => {
    return(
        <StyledSec>
            <StyledColums>
                <StyledColmImg>
                    <StyledImg src={Sport} width={450} height={600} alt="Tênis-sport" />
                </StyledColmImg>

                <StyledAbout>
                    <StyledTitle>Sobre a TK Tênis</StyledTitle>
                    <StyledText>A TK Tênis é uma empresa dedicada à venda de calçados.
                         Com uma seleção cuidadosamente curada dos itens mais desejados, 
                         oferecemos desde tênis nacionais até importados, 
                         com preços competitivos e qualidade garantida. Oferecemos uma ampla variedade de tênis, 
                         desde os mais casuais até os esportivos de alta performance. 
                         Nossos produtos são escolhidos com cuidado para atender às necessidades dos nossos clientes.
                         <br/>Garantimos a segurança das suas compras e oferecemos suporte para esclarecer todas as suas dúvidas. 
                         Tudo para deixar nossos clientes satisfeitos e sem nenhuma preocupação.
                         </StyledText>
                </StyledAbout>
            </StyledColums>
        </StyledSec>
    )
}

const StyledSec = styled.section`
    ${Container};
    background-color: black;
    color: white;
    
`;

const StyledColums = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 70px;
    justify-items: center;
`;

const StyledImg = styled(Image)`
    border-radius: 10%;
`;

const StyledColmImg = styled.div`

`;

const StyledAbout = styled.div`
    display: grid;
    justify-items: center;
    height: 400px;
    align-content: space-evenly
      
`;

const StyledTitle = styled.h1`
    margin: 50px;
    font-size: 30px;
`;

const StyledText = styled.p`
    font-size: 20px;
    text-align: justify;
    line-height: 30px;
`;

export default About;