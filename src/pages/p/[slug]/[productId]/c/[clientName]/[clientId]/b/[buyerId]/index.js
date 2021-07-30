import React, { useEffect } from 'react';
// import PageLayout from '@/components/layout/PageLayout/PageLayout';
// import { Link } from '@/components/base';
import HttpRequest from '@/shared/http/HttpRequest';
import { BASE_URL } from '@/shared/config';
import { fixImageUrl } from '@/shared/data';
import { NextSeo } from 'next-seo';

const ProductPreview = ({ product, clientName, clientId, buyerId }) => {
  const {
    id,
    name,
    description,
    slug,
    attachments: [{ path }],
    cliente: { settings: { storeUrl } = {} },
  } = product;
  const filePath = `${BASE_URL}${fixImageUrl(path)}`;
  useEffect(() => {
    window.location.replace(`${storeUrl}#/product/${id}?bid=${buyerId}?cid=${clientId}`);
  }, []);

  return (
    <>
      <NextSeo
        title={name}
        description={description}
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: `https://vendemais.app/product/${slug}/${id}/c/${clientName}/${clientId}/b/${buyerId}`,
          title: name,
          description,
          type: 'article',
          images: [
            {
              url: filePath,
              width: 800,
              height: 600,
              itemprop: 'image',
              alt: 'Og Image Pequena',
            },
            {
              url: filePath,
              width: 900,
              height: 800,
              itemprop: 'image',
              alt: 'Og Image Alt grande',
            },
          ],
          site_name: 'Produto',
        }}
        twitter={{
          handle: '@handle',
          site: '@ymbu.com',
          cardType: 'summary_large_image',
        }}
      />
      <>
        {/* <div>
          <div className="page-title-overlap bg-dark pt-4">
            <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
              <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                <h1 className="h3 text-light mb-0">{name}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bg-light box-shadow-lg rounded-lg px-4 py-3 mb-5">
              <div className="px-lg-3">
                <div className="row">
                  <div className="col-lg-7 pr-lg-0 pt-lg-4">
                    <div className="cz-product-gallery">
                      <div className="cz-preview order-sm-2">
                        <div className="cz-preview-item active" id="first">
                          <img
                            className="cz-image-zoom"
                            src={`${BASE_URL}/${fixImageUrl(path)}`}
                            data-zoom="/img/shop/single/gallery/01.jpg"
                            alt="Product "
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="second">
                          <img
                            className="cz-image-zoom"
                            src="/img/shop/single/gallery/02.jpg"
                            data-zoom="/img/shop/single/gallery/02.jpg"
                            alt="Product "
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="third">
                          <img
                            className="cz-image-zoom"
                            src="/img/shop/single/gallery/03.jpg"
                            data-zoom="/img/shop/single/gallery/03.jpg"
                            alt="Product "
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                        <div className="cz-preview-item" id="fourth">
                          <img
                            className="cz-image-zoom"
                            src="/img/shop/single/gallery/04.jpg"
                            data-zoom="/img/shop/single/gallery/04.jpg"
                            alt="Product "
                          />
                          <div className="cz-image-zoom-pane" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <div className="product-details ml-auto pb-3">
                      <div className="mb-3">
                        <span className="h3 font-weight-normal text-accent mr-1">
                          $18.<small>99</small>
                        </span>
                        <del className="text-muted font-size-lg mr-3">
                          $25.<small>00</small>
                        </del>
                        <span className="badge badge-danger badge-shadow align-middle mt-n2">Sale</span>
                      </div>
                      <form className="mb-grid-gutter" method="post">
                        <div className="form-group d-flex align-items-center">
                          <button className="btn btn-primary btn-shadow btn-block" type="submit">
                            <i className="czi-cart font-size-lg mr-2" />
                            Ver na loja
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div> Carregando produto...</div>
      </>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { slug, productId, clientName, clientId, buyerId } = ctx.params;
  console.log(slug, productId, clientName, clientId, buyerId);
  const httpRequest = new HttpRequest();
  // pesquisar pelo slug pode trazer varios registros... pensar na possibilidade de o slug ir com o id do produto
  const product = await httpRequest.get(`rs/api/v1/products/preview/${productId}`);
  return {
    props: {
      product,
      clientName,
      clientId,
      buyerId,
    },
  };
};

export default ProductPreview;
