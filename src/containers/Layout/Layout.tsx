import Footer from "components/Footer/footer";
import Navigation from "components/Navigation/Navigation";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { LayoutInterface } from "./Layout.types";

const Layout: React.FC<PropsWithChildren<LayoutInterface>> = () => (
  <div>
    <Navigation />
    {/* <SideBar onCollapse={() => setCollapsed(!collapsed)} />

      <StyledMain collapsed={collapsed}>
        <Navbar />
        <Box sx={ChildLayout(pathname)}>
          <Outlet />
        </Box>
      </StyledMain> */}
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
