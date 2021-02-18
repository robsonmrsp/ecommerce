import React from 'react';
import { Layout, Header, Main, Aside, Body } from './styles';
import { Container } from '@bootstrap-styled/v4';

const Home = () => (
  <Layout>
    <Header>header</Header>
    <Main>
      <Aside>aside</Aside>
      <Body>
        <Container>
          <div className="bg-primary">Header</div>
          <div className="w-25 bg-warning d-inline-block">Sidebar</div>
          <div className="w-75 bg-info d-inline-block">Body</div>
        </Container>
      </Body>
    </Main>
  </Layout>
);

export default Home;
