import React from 'react';
import PropTypes from 'prop-types';

import HeaderCartDropdown from './HeaderCartDropdown';

/**
 * Component renders DropDown on the Header
 */
const HeaderDropDowns = ({cartRef, dropdownOpen, dropdownData, closeDropDown }) => {
  const DropDowns = {
    CART: <HeaderCartDropdown cartRef={cartRef} dropdownData={dropdownData} />,
  };

  return dropdownOpen ? DropDowns[dropdownOpen] : null;
};

HeaderDropDowns.propTypes = {
  messageRef: PropTypes.object,
  notificationRef: PropTypes.object,
  userRef: PropTypes.object,
  dropdownOpen: PropTypes.string,
  dropdownData: PropTypes.array,
  closeDropDown: PropTypes.func,
};

export default HeaderDropDowns;
