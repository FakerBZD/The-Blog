import Footer from "components/Footer/Footer";
import Navigation from "components/Navigation/Navigation";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { LayoutInterface } from "./Layout.types";
import { LayoutStyled } from "./Layout.styles";

const Layout: React.FC<PropsWithChildren<LayoutInterface>> = () => (
  <LayoutStyled>
    <Outlet />
    <Footer />
    <Navigation />
  </LayoutStyled>
);
export default Layout;
