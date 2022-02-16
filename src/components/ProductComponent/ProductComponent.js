import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

export default function ProductComponent({ img, title, text, price, url }) {
  return (
    <div>
      <StyledCard border="dark" className="m-3 p-1">
        <CardImg variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Text>R$ {price}</Card.Text>

          <Button variant="outline-dark" to={url}>
            Comprar
          </Button>
        </Card.Body>
      </StyledCard>
    </div>
  );
}

const CardImg = styled(Card.Img)`
  width: auto;
  height: 15vh;
  @media screen and (max-width: 720px){
    max-height: 15vh;
    width: auto;
`;
const StyledCard = styled(Card)`
  max-width: 20vw!important;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  
  @media screen and (min-width: 720px){
      min-width: 18vw;
  }

  @media screen and (max-width: 720px){
    max-height: 70vh;
    min-height:40vh;
    min-width:40vw;
}
`;
