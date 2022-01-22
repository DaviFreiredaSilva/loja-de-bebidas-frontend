import React from "react";
import {  Container } from "react-bootstrap";
import styled from "styled-components";
import ProductComponent from "../components/ProductComponent/ProductComponent";

import Bg from "../img/beerWallpaper.jpg";
import heinekenLn from "../img/heinekenLn.jpg";
import cabare from "../img/cabare.jpeg"

export default function HomePage() {
  return (
    <MainDiv style={{ backgroundImage: `url(${Bg})` }} className="p-2">
      <Container>
        <StyledH1 className="text-start mt-4 mb-4 text-dark">
          Destaques
        </StyledH1>

        <div className="d-flex flex-wrap">
          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={cabare}
            title="Cachaça Cabaré"
            text="Cachaça nacional 1L"
            price="50,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />

          <ProductComponent
            img={heinekenLn}
            title="Heineken Long Neck"
            text="Cerveja long neck 350ml"
            price="7,00"
          />
        </div>
      </Container>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  min-height: calc(92vh);
`;

const StyledH1 = styled.h1`
  background-color: rgba(255, 255, 255, 0.5);
`;
