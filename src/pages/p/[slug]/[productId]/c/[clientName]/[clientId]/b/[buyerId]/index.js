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
