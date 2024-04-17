import styled from "styled-components";

import Image from "next/image";
import Nik from "../../../public/tenis-two.jpg";
import Twhite from "../../../public/tenis-tree.jpg";
import Star from "../../../public/tenis-six.jpg";
import Nuxt from "../../../public/nuxt.jpg";
import NikeW from "../../../public/Nike-white.jpg";
import Gold from "../../../public/tenis-five.jpg";

import { Container } from "@/styles/util";
import Link from "next/link";

const Galery = () => {
    return(
        <StyledSec>
            <StyledTitle>Galeria</StyledTitle>
            
            <StyledColums>
                <Image src={Star} width={250} height={250} alt="" />
                <Image src={Gold} width={250} height={250} alt="" />
                <Image src={NikeW} width={250} height={250} alt="" />
            </StyledColums>
            <StyledColums>
                <Image src={Twhite} width={250} height={275} alt="" />
                <Image src={Nik} width={250} height={275} alt="" />
                <Image src={Nuxt} width={250} height={275} alt="" />
            </StyledColums>
            
            <Link href="/list">
                <StyledButton type="button">
                    Compre o seu !!!
                </StyledButton>
            </Link>
        </StyledSec>
    )
}

const StyledSec = styled.section`
    ${Container};
    background-color: black;
    color: white;
    display: grid;
    justify-items: center;
`;

const StyledTitle = styled.h1`
    padding: 70px 70px;
    text-transform: uppercase;
    font-size: 50px;
`;

const StyledColums = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 30px;
`;

const StyledButton = styled.button`
    font-size: 20px;
    padding: 20px 40px;
    margin: 70px;
    border-radius: 40px;
    cursor: pointer;
    background-color: white;
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

export default Galery;