"use client"
import React from 'react';
import {
  HeaderContainer,
  Navbar,
  MenuHamburguesa,
  Logo,
  NavbarRight,
  InfoText,
  NavbarButtons,
  Icon,
} from './header.styled';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar>
        {/* Menú hamburguesa y logo */}
        <MenuHamburguesa>
          <div>
            <a href="#">
              <Icon src="assets/bars-solid.svg" alt="menu" />
            </a>
          </div>
        </MenuHamburguesa>

        <Logo>
          <Image
            src="/assets/sigoo-logo.jpg" // Ruta relativa desde public
            alt="ico"
            width={100} // Especifica el ancho según el diseño
            height={40} // Especifica el alto según el diseño
            priority // Carga prioritaria para optimización
          />
        </Logo>

        {/* Contenedor derecho */}
        <NavbarRight>
          <InfoText>
            <span>Nombre de usuario</span>
            <span>Terminal:</span>
          </InfoText>

          {/* Botones */}
          <NavbarButtons>
            <a href='#'>
            <Icon src="assets/user-regular.svg" alt="user" />
            </a>
            <a href="#">
              <Icon src="assets/search-24px.svg" alt="search" />
            </a>
            <a href="#">
              <Icon src="assets/outline-apps-24px.svg" alt="options" />
            </a>
          </NavbarButtons>
        </NavbarRight>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
