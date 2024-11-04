"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import { GuiaProvider } from "./context/GuiaContext";
import StyledComponentsRegistry from './lib/registry'
import Header from "./components/Header/header";
import './globals.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="es">
      <head>
        <title>Mi Aplicación</title>
      </head>
      <body>
        <StyledComponentsRegistry> {/* Envuelve con StyledComponentsRegistry */}
          <ThemeProvider theme={theme}>
            <GuiaProvider> {/* Envolvemos en GuiaProvider */}
              <Header/>
              <main>{children}</main>
            </GuiaProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};
export default Layout;
