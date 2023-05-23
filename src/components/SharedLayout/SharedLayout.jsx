import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Nav, Link } from './SharedLayoyt.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        {' '}
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
