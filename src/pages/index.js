import PageLayout from '@/components/layout/PageLayout';
import HttpRequest from '@/shared/http';

const Index = ({ data }) => (
  <PageLayout>
    <div>Index data {data.itens.length} </div>
  </PageLayout>
);

export const getServerSideProps = async (ctx) => {
  const httpRequest = new HttpRequest();
  const data = await httpRequest.get('rs/crud/productCategorys');
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default Index;
