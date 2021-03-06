import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';

import Skeleton from 'components/Skeleton';
import ProductCard from 'components/ProductCard';
import { Spacing } from 'components/Layout';
import InfiniteScroll from 'components/InfiniteScroll';
import { Loading } from 'components/Loading';
import Empty from 'components/Empty';


import { GET_PRODUCTS } from 'graphql/product';

import * as Routes from 'routes';

/**
 * Renders products in shop page
 */
const SHOP_PAGE_PRODUCTS_LIMIT = 10;

const ShopProducts = ({ }) => {
  const variables = {  };
  const { data, loading, fetchMore, networkStatus } = useQuery(GET_PRODUCTS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });



  if (loading && networkStatus === 1) {
    return <Skeleton height={500} bottom="lg" top="lg" count={SHOP_PAGE_PRODUCTS_LIMIT} />;
  }
console.log(data);

  const { products } = data.search.results.products;
  const count  = SHOP_PAGE_PRODUCTS_LIMIT;
  if (!products.length > 0) {
    return (
      <Spacing bottom="lg">
        <Empty text="No items to list." />
      </Spacing>
    );
  }

  return (
    <InfiniteScroll
      data={products}
      dataKey="search.results.products"
      count={parseInt(count)}
      variables={variables}
      fetchMore={fetchMore}
    >
      {(data) => {
        return data.map((product, i) => {
          const showNextLoading = loading && networkStatus === 3 && data.length - 1 === i;

          return (
            <Fragment key={product.id}>

              <Spacing bottom="lg">
                <ProductCard
                  product={product}
                />
              </Spacing>

              {showNextLoading && <Loading top="lg" />}
            </Fragment>
          );
        });
      }}
    </InfiniteScroll>
  );
};

export default ShopProducts;
