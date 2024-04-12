import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import Logo from "../../../public/TK-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container } from "@/styles/util";

const Footer = () => {
    const today = new Date();

    return(
        <StyledFooter>
            <StyledColum>

                <StyledLogo>
                    <Link href="/">
                        <Image src={Logo} width={100} height={100} alt="Logo" />
                    </Link>
                </StyledLogo>

                <StyledIcons>
                    <Link href="/">
                        <StyledIcon icon={faFacebookSquare} />
                    </Link>
                    <Link href="/">
                        <StyledIcon icon={faTwitter} /> 
                    </Link>
                    <Link href="/">
                        <StyledIcon icon={faYoutube} />
                    </Link>
                </StyledIcons>
            </StyledColum>

            <StyledInfos>
                <StyledLink href="">
                    <StyledText>Centro de ajuda</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Cartão pré-pago</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Relação com investidores</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Avisos legais</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Preferências de cookies</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Informações corporativas</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Dúvidas frequentes</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Informação sobre devolução</StyledText>
                </StyledLink>
                <StyledLink href="">
                    <StyledText>Entre em contato</StyledText>
                </StyledLink>
            </StyledInfos>

            <StyledMarca> © 2000 - {today.getFullYear()} TKTenis. </StyledMarca>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    ${Container};
    background-color: gray;
    display: grid;
`;

const StyledColum = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 30px;
`;

const StyledIcons = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    width: 50px;
    height: 50px;
`;

const StyledLogo = styled.div`

`;

const StyledInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    line-height: 20px;
    text-decoration: underline;
`;

const StyledLink = styled(Link)`
    :hover{
        color: white;
    }
`;

const StyledText = styled.p`
    font-size: 12px;
    font-weight: 400;
`;

const StyledMarca = styled.p`
    display: grid;
    justify-items: center;
    margin: 30px;
    font-size: 12px;
`;

export default Footer;