import React from 'react'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'

export default function ProductComponent({img, title, text,price, url}) {
    return (
        <div>
            <StyledCard border="dark" className="m-3 p-1">
                <CardImg variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>R$ {price}</Card.Text>
               
                <Button variant="outline-dark" to={url}>Comprar</Button>
                </Card.Body>
            </StyledCard>
        </div>
    )
}

const CardImg = styled(Card.Img)`
    width: 10vw;
`
const StyledCard = styled(Card)`
    width: 18vw;
    align-items: center;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.7);
`