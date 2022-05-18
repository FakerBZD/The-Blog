import React, { ReactElement, FC } from "react";
import BookIcon from "@mui/icons-material/Book";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { Tooltip } from "@mui/material";

import {
  NavigationBarStyled,
  MenuItemsContainerStyled,
  iconStyle,
} from "./Navigation.styles";

const Navigation: FC<any> = (): ReactElement => (
  <NavigationBarStyled position="fixed">
    <MenuItemsContainerStyled>
      <Tooltip title="All blogs ">
        <Link to="/all-blogs">
          <Button>
            <BookIcon sx={iconStyle} />
          </Button>
        </Link>
      </Tooltip>
    </MenuItemsContainerStyled>
    <MenuItemsContainerStyled>
      <Tooltip title="Add new blog ">
        <Link to="/add-blog">
          <Button>
            <AddBoxIcon sx={iconStyle} />
          </Button>
        </Link>
      </Tooltip>
    </MenuItemsContainerStyled>
  </NavigationBarStyled>
);

export default Navigation;
