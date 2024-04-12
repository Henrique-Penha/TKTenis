'use client';

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Container } from "@/styles/util";

import Car from "../../../public/carrinho.png";
import Logo from "../../../public/TK-logo.jpg";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledNavbar>
                    <StyledLogo>
                        <Link href="/">
                            <Image src={Logo} width={100} height={100} alt="Logo" />
                        </Link>
                    </StyledLogo>
                    <StyledMenu>
                        <StyledItems>
                            <Link href="/">
                                Home
                            </Link>
                        </StyledItems>
                        <StyledItems>
                            <Link href="/about">
                                Sobre
                            </Link>
                        </StyledItems>
                        <StyledItems>
                            <Link href="">
                                Produtos
                            </Link>
                        </StyledItems>
                        <StyledItems>
                            <Link href="">
                                <Image src={Car} width={50} height={50} alt="Carrinho" />
                            </Link>
                        </StyledItems>
                    </StyledMenu>
                </StyledNavbar>
            </StyledHeader>
        </>
    )
}

const StyledHeader = styled.header`
    ${Container};
    background-color: black;
    color: white;
    border-bottom: solid blue;
`;

const StyledNavbar = styled.nav`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
`;

const StyledLogo = styled.p`

`;

const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    gap: 50px;
`;

const StyledItems = styled.li`
    :hover {
        color: pink;
    }
`;

export default Header;