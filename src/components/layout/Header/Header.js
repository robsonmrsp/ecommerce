// baseado nesse:
// https://Vendemais.createx.studio/home-electronics-store.html

import { useContext, useState } from 'react';
import { Image, Link, Menu, SearchInput, Toolbar } from '@/components/base';
import { EcommerceContext } from '@/shared/context';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Container } from './styles';

export const Header = () => {
  const { state } = useContext(EcommerceContext);
  const { categories = [] } = state;

  const [newClasses, setNewClasses] = useState('');

  useScrollPosition(
    ({ currPos }) => {
      const isVisible = Math.abs(currPos.y) < 127;
      if (isVisible) {
        setNewClasses('');
        document.body.style.paddingTop = '';
      } else {
        // set body
        setNewClasses(' navbar-stuck');
        document.body.style.paddingTop = '127px';
      }
    },
    [newClasses]
  );

  return (
    // checar o scrol para adicionar a classe navbar-stuck
    <header>
      <div className={`navbar-sticky bg-light ${newClasses}`}>
        <div className="navbar navbar-expand-lg navbar-light">
          <Container>
            <Link
              className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0"
              href="/home"
              style={{ minWidth: '7rem' }}
            >
              <Image width={142} src="img/logo-dark.png" alt="Vendemais" />
            </Link>
            <Link className="navbar-brand d-sm-none mr-2" href="/" style={{ minWidth: '4.625rem' }}>
              <Image width={74} src="img/logo-icon.png" alt="Vendemais" />
            </Link>
            <SearchInput
              className="d-none d-lg-block mx-4"
              appendInput
              placeholder="Pesquisa de Produtos"
              filterBy={(categories || []).map(({ id, name }) => ({ id, name }))}
            />
            <Toolbar cart={state.cart} />
          </Container>
        </div>
        <Menu />
      </div>
    </header>
  );
};
