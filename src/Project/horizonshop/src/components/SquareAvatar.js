import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { UserIcon } from './icons';

const Root = styled.div`
  width: ${(p) => (p.size ? `${p.size}px` : '45px')};
  height: ${(p) => (p.size ? `${p.size}px` : '45px')};
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/**
 * Component for rendering user's image
 */
const SquareAvatar = ({ size, image }) => (
  <Root size={size}><Image src={image} /> </Root>
);

SquareAvatar.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
};

export default SquareAvatar;
