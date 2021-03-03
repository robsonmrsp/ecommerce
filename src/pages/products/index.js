import React, { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import HttpRequest from '@/shared/http/HttpRequest';
import ToolbarFilter from '@/components/shop/ToolbarFilter';
import ProductCard from '@/components/shop/ProductCard';
import ProductsBottonPagination from '@/components/shop/ProductsBottonPagination';
import ProductsTopPaginator from '@/components/shop/ProductsTopPagination';

const Home = ({ pageProducts }) => {
  useEffect(() => {
    console.log(pageProducts);
  }, []);

  return (
    <PageLayout>
      <>
        <div className="bg-dark pt-4 pb-5">
          <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
            <div className="d-lg-flex justify-content-between pb-3">
              <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <li className="breadcrumb-item">
                      <a className="text-nowrap" href="index.html">
                        <i className="czi-home" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item text-nowrap">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li className="breadcrumb-item text-nowrap active" aria-current="page">
                      Grid filters on top
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                <h1 className="h3 text-light mb-0">Shop grid filters on top</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          <div className="bg-light box-shadow-lg rounded-lg p-4 mt-n5 mb-4">
            <ProductsTopPaginator pager={pageProducts} />
            <ToolbarFilter />
          </div>
          <div className="row pt-3 mx-n2">
            {(pageProducts.itens || []).map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
          <hr className="my-3" />
          <ProductsBottonPagination pager={pageProducts} />
        </div>
      </>
    </PageLayout>
  );
};
export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const httpRequest = new HttpRequest();
  const pageProducts = await httpRequest.get('rs/crud/products', query);
  return {
    props: {
      product: {},
      pageProducts,
    },
  };
};

export default Home;
