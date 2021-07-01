import React from 'react';
import { Header } from '../Header/Header';

const PageLayout = ({ children }) => {
  console.log('');
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* <Row>
        <Col>{children} </Col>
      </Row> */}
    </>
  );
};

export default PageLayout;
