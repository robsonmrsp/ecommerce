import { createGlobalStyle } from 'styled-components';
import BootstrapProvider from '@bootstrap-styled/provider';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EcommerceProvider } from '@/shared/context';

// Create a client
const queryClient = new QueryClient();

if (typeof window !== 'undefined') {
  require('jquery');
  require('popper.js');
  require('bootstrap');
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    '$brand-danger': 'green',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <EcommerceProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <BootstrapProvider theme={theme}>
            <Component {...pageProps} />
          </BootstrapProvider>
        </QueryClientProvider>
      </EcommerceProvider>
    </>
  );
}
