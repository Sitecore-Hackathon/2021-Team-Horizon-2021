import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'components/Layout';
import InfiniteScroll from 'components/InfiniteScroll';
import Empty from 'components/Empty';
import ShoppingBagItem from './ShoppingBagItem';


/**
 * Renders shopping bag in cart page
 */
const ShoppingBagItems = ({ itemsData }) => {

  if (!itemsData.length > 0) {
    return (
      <Spacing bottom="lg">
        <Empty text="No items ." />
      </Spacing>
    );
  }

  return (
    <InfiniteScroll
      data={itemsData}
      dataKey="itemsData"
      count={ itemsData.length }
      variables={{}}
      fetchMore={() => null}
    >
      {(data) => {
        return data.map((product) => {
          return (
            <Fragment key={product.id}>
              <ShoppingBagItem product={product} />
            </Fragment>
          );
        });
      }}
    </InfiniteScroll>
  );
};

ShoppingBagItems.propTypes = {
  itemsData: PropTypes.array,
};

export default ShoppingBagItems;
