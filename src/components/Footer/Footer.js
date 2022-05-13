import React from "react";
import './Footer.css'
import { SiPlatzi } from "react-icons/si";
import { AiTwotoneHeart } from "react-icons/ai";
import { CgCopyright } from "react-icons/cg";



function Footer(){

    return (
        <React.Fragment>
        <h3 className="Footer" >Hecho con < AiTwotoneHeart color="red"/> a partir de curso de <SiPlatzi color="green" />  
        <p><CgCopyright/>{new Date().getFullYear()}</p> {/* Outputs 2020 */}</h3> 



        </React.Fragment>
     

        );
}

export {Footer}; 