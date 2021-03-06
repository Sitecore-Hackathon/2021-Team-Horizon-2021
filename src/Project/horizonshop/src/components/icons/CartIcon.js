import React from 'react';
import theme from 'theme';

/**
 * Cart icon
 *
 * @param {string} width
 * @param {string} color
 */
export const CartIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '23';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <svg
      width={width || DEFAULT_WIDTH}
      fill={theme.colors[color] || DEFAULT_COLOR}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.098 21.994H2.903l-.8-16.048H5.09A7.044 7.044 0 005 7.021v.93h2v-.93c0-.37.046-.728.122-1.075h9.756c.076.347.122.705.122 1.075v.93h2v-.93c0-.367-.036-.724-.09-1.075h2.988l-.8 16.048zM12 2.006c1.594 0 2.999.765 3.915 1.933h-7.83C9.002 2.771 10.407 2.006 12 2.006zm6.28 1.933C17.14 1.611 14.758 0 12 0 9.244 0 6.86 1.611 5.72 3.94H0L1 24h22l1-20.06h-5.72z" />
    </svg>
  );
};