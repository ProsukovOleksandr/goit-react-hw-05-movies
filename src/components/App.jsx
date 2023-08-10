import { lazy, Suspense } from 'react';
import {NavLink,Routes, Route} from "react-router-dom";
import styled from "styled-components";
const Home = lazy(()=> import('./Home/Home'));
const Movies = lazy(()=> import('./Movies/Movies'));

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}>
<Suspense fallback={<div>Please, wait, loading data...</div>}>
  <nav>
<StyledLink to="/" end>Home</StyledLink>
<StyledLink to="/movies">Movies</StyledLink>
  </nav>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/movies" element={<Movies/>} />
</Routes>
</Suspense>
    </div>
  );
};
