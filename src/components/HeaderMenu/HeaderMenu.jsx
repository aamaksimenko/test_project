import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  func,
  node,
} from 'prop-types';

import {
  Menu,
  MenuItem,
} from '@mui/material';

import { listsItemMenu, menuId } from '../constants';

const HeaderMenu = ({ menuElement, setMenuElement }) => {
  const navigate = useNavigate();

  const isMenuOpen = Boolean(menuElement);

  const handleMenuClose = () => {
    setMenuElement(null);
  };
  return (
    <Menu
      menuelement={menuElement}
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
        <MenuItem
          key={list.item_menu}
          onClick={() => {
            handleMenuClose();
            navigate(list.location);
          }}
        >
          {list.item_menu}
        </MenuItem>
      ))}
    </Menu>
  );
};

HeaderMenu.defaultProps = {
  menuElement: null,
  setMenuElement: () => {},
};
HeaderMenu.propTypes = {
  menuElement: node,
  setMenuElement: func,
};

export const HeaderMenuMemo = memo(HeaderMenu);
