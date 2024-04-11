import styled from "styled-components";

import { Container } from "@/styles/util";

import Image from "next/image";

import Twhite from "../../../public/tenis-tree.jpg";
import Tgold from "../../../public/tenis-five.jpg";

const Info = () => {
    return(
        <StyledSec>
            <StyledColum>
                <StyledImg src={Twhite} width={390} height={350} alt="Tenis-white" />
                <StyledText>Preços imbativeis com até 12x sem juros no cartão de credito.</StyledText>
            </StyledColum>
            <StyledColum>
                <StyledText>Todos os estilos pra você provar e entrar no mundo da moda com elegância que só você tem.</StyledText>
                <StyledImg src={Tgold} width={390} height={350} alt="Tenis-gold" />
            </StyledColum>
        </StyledSec>
    )
}

const StyledSec = styled.section`
    ${Container};
    background-color: gray;
`;

const StyledColum = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 40px;
`;

const StyledImg = styled(Image)`
    border-radius: 10%;
`;

const StyledText = styled.p`
    text-align: justify;
    font-size: 25px;
    max-width: 20ch;
    letter-spacing: 1px;
    line-height: 50px;
`;

export default Info;