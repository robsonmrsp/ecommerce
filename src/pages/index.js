import PageLayout from '@/components/layout/PageLayout';
import { EcommerceContext } from '@/shared/context';
import HttpRequest from '@/shared/http';
import { useContext, useEffect } from 'react';

const Index = ({ categories }) => {
  const { state, update } = useContext(EcommerceContext);

  update({ categories });

  useEffect(() => {
    console.log(state);
  });
  return (
    <PageLayout>
      <div>Index data {categories.length} </div>
    </PageLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const httpRequest = new HttpRequest();
  const categories = await httpRequest.get('rs/crud/productCategorys/basic');
  return {
    props: {
      categories,
    },
  };
};

export default Index;
