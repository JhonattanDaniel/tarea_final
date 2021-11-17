import './styles/header.css'
import React from "react";
import LogoHV from './images/hv.gif'
import { Carousel } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <img src={LogoHV} alt="" className="logo"></img>
            <Carousel className="carousel">
                <Carousel.Item>
                    <Alert className="alert">

                        <h1>HOJA DE VIDA</h1>

                    </Alert>
                </Carousel.Item>
                <Carousel.Item>
                    <Alert className="alert">
                        <p>NOMBRES: Jhonatan Daniel </p>
                        <p>APELLIDOS: Quintero Salazar</p>
                        <p>FECHA DE NACIMIENTO: 30 de Junio de 1996</p>
                        <p>CIUDAD DE NACIMINETO: Manizales-Caldas Colombia</p>
                    </Alert>
                </Carousel.Item>
            </Carousel>
            <Nav variant="pills" defaultActiveKey="/src/components/app.js" className="nav">
                <Nav.Item>
                    <Nav.Link href="/src/components/app.js">Formulario</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Experiencia</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;