import { Col, Row } from 'react-bootstrap';
import { Header } from '../Header';
import { Comp } from './styles';

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
