import { useEffect } from 'react';
import { ShopProduct } from '@/components/base/ShopProduct';

const TrendingProducts = ({ products }) => {
  useEffect(() => {
    console.log('tending products', products);
  }, []);

  return (
    <section className="container pt-5">
      {/* Heading*/}
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 mr-2">Trending products</h2>
        <div className="pt-3">
          <a className="btn btn-outline-accent btn-sm" href="shop-grid-ls.html">
            More products
            <i className="czi-arrow-right ml-1 mr-n1" />
          </a>
        </div>
      </div>
      {/* Grid*/}
      <div className="row pt-2 mx-n2">
        {(products || []).map((product) => (
          <ShopProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
