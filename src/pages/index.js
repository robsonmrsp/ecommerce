import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 200px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>My page</Title>;
}
