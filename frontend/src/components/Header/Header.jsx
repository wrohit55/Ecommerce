

import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
// import { Link } from 'react-scroll'
import { ReactNavbar } from 'overlay-navbar'

const options = {
    burgerColor: "#eb4034",
    logo,
    burgerColorHover: "#a62d24",
    navColor1: "gray",
    logoWidth: "200px",
    logoHoverColor: "white",
    link1Text: "Home",
    link2Text: "Programs",
    link3Text: "Products",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",

}

const Header = () => {

    return (
        <ReactNavbar {...options}


        />

    )

}

export default Header