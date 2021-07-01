import { Comp } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <RightContent>
          <Logo />
          <Brand />
        </RightContent>
        <CenterContent>
          <Search />
        </CenterContent>
        <LeftContent>
          <Account />
          <Cart />
        </LeftContent>
      </Content>
    </Container>
  );
};

export default Header;
