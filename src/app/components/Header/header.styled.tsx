import styled from "styled-components";
// Header.styles.ts


export const HeaderContainer = styled.header`
  background: #ffffff;
  box-shadow: 0px 3px 15px #00000029;
  width: 100%;
  opacity: 1;
display: grid;
vertical-align: middle;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const MenuHamburguesa = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    width: 25px;
    background-color: #fff;
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    div {
      width: 20px;
      height: 2px;
    }
  }
`;

export const Logo = styled.div`
  margin-left: 30px;
  font-size: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-align: right;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButtons = styled.div`
  display: flex;

  a {
    color: #fff;
    border: none;
    padding: 4px 6px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  @media (max-width: 768px) {
    a {
      padding: 6px 10px;
      font-size: 0.9rem;
    }
  }
`;

export const Icon = styled.img`
width: 20px;
`;
