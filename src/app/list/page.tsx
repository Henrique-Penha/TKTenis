"use client";


import styled from "styled-components";
import Image from "next/image";

import { Container } from "@/styles/util";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../interface/products";


async function getProducts(): Promise<any> {
  const res = await fetch(`${process.env.API_URL}/products`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const productsData: any[] = await res.json();
  productsData.forEach((product) => {
    product.image = `${process.env.API_URL}/uploads/${product.fileName}`;
    product.formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(product.price);
    product.splitPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(product.price / 10);
  });

  return productsData;
}

export default async function List() {
  const products: Product[] = await getProducts();

  return (
    <StyledContainer>
      <StyledTitle>Produtos</StyledTitle>
      <StyledSearch
        type="search"
        name="Pesquisa"
        id=""
        placeholder="Busca..."
      />
      <StyledButton icon={faMagnifyingGlass} />
      <StyledColums>
        {products &&
          products.map((product) => {
            return (
              <StyledCard key={product._id}>
                <StyledImage
                  src={product.image}
                  width={200}
                  height={200}
                  alt="Image"
                />
                <StyledName>{product.name}</StyledName>
                <StyledPrice>{product.formattedPrice}</StyledPrice>
                <StyledSplicePrice>10x de {product.splitPrice} sem juros</StyledSplicePrice>
                <StyledLink href="/info">
                  <StyledBuy>Comprar</StyledBuy>
                </StyledLink>
              </StyledCard>
            );
          })}
      </StyledColums>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  ${Container};
  background-color: black;
  color: white;
  display: grid;
  justify-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  padding: 40px;
`;

const StyledSearch = styled.input`
  height: 40px;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
`;

const StyledButton = styled(FontAwesomeIcon)`
  position: absolute;
  height: 15px;
  top: 250px;
  right: 465px;
  color: black;
  cursor: pointer;
`;

const StyledColums = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  padding: 50px;
  gap: 30px;
`;

const StyledCard = styled.div`
  display: grid;
  justify-items: center;
  width: 250px;
  height: 350px;
  background-color: white;
  color: black;
  border-radius: 10%;
  padding: 20px;
  box-shadow: 5px 0px 10px pink;

  &:hover {
    box-shadow: 5px 10px 10px pink;
    transform: scale(1.1);
    color: blue;
  }
`;

const StyledLink = styled(Link)``;

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const StyledName = styled.h3`
  font-size: 25px;
`;

const StyledPrice = styled.h4`
  font-family: sans-serif;
  font-weight: 400;
`;

const StyledSplicePrice = styled.h5``;

const StyledBuy = styled.button`
  padding: 5px;
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
