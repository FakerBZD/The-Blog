import React, { ReactElement, FC } from "react";
import BookIcon from "@mui/icons-material/Book";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import AddBoxIcon from "@mui/icons-material/AddBox";

import {
  NavigationBarStyled,
  MenuItemsContainerStyled,
} from "./Navigation.styles";

const Navigation: FC<any> = (): ReactElement => (
  <NavigationBarStyled position="fixed">
    <MenuItemsContainerStyled>
      <Button>
        <BookIcon style={{ width: "5em", height: "2em", fill: "black" }} />
      </Button>
    </MenuItemsContainerStyled>
    <MenuItemsContainerStyled>
      <Button>
        <AddBoxIcon style={{ width: "5em", height: "2em", fill: "black" }} />
      </Button>
    </MenuItemsContainerStyled>
  </NavigationBarStyled>
);

export default Navigation;
