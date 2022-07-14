import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Menu,
  MenuItem,
} from '@mui/material';

import { listsItemMenu, menuId } from '../constants';

type OwnProps = {
    menuElement?: any; // TODO: instanceOf(Element)
    setMenuElement: (...args: any[]) => any;
};

// @ts-expect-error TS(2456): Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof HeaderMenu.defaultProps;

// @ts-expect-error TS(7022): 'HeaderMenu' implicitly has type 'any' because it ... Remove this comment to see the full error message
const HeaderMenu = ({ menuElement, setMenuElement }: Props) => {
  const navigate = useNavigate();

  const isMenuOpen = Boolean(menuElement);

  const handleMenuClose = () => {
    setMenuElement(null);
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Menu
      anchorEl={menuElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {listsItemMenu.map((list) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MenuItem
          key={list.itemMenu}
          onClick={() => {
            handleMenuClose();
            navigate(list.location);
          }}
        >
          {list.itemMenu}
        </MenuItem>
      ))}
    </Menu>
  );
};

HeaderMenu.defaultProps = {
  menuElement: null,
};

export const HeaderMenuMemo = memo(HeaderMenu);
