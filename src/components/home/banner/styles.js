import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
`;

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background: #fff;
`;

export const Aside = styled.aside`
  flex: 0 0 240px;
`;

export const Main = styled.div`
  width: 100vw;
  display: flex;
  padding-top: 70px;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export const Body = styled.div`
  flex: 1;
  overflow: auto;
`;
