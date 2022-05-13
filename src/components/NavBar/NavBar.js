import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { SiPlatzi } from "react-icons/si";
import { AiTwotoneHeart } from "react-icons/ai";
import { CgCopyright } from "react-icons/cg";

function NavBar(){

    return (
        <React.Fragment>
        <>
        {[false ].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid   >
                <Navbar.Brand  ></Navbar.Brand>
                <Navbar.Brand  ><h4> LISTA DE TAREAS </h4> </Navbar.Brand>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menú
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Acerca de</Nav.Link>
                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                    
                    <h3 className="NavBarFooter" >Hecho con < AiTwotoneHeart color="red"/> a partir de curso de <SiPlatzi color="green" />  
                    <p><CgCopyright/>{new Date().getFullYear()}</p> {/* Outputs 2020 */}</h3> 
                   
                    </Nav>
                  
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>

        </React.Fragment>
     

        );
}

export {NavBar}; 