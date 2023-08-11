import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledLink, StyledHeader,StyledNav } from './App.styled';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense fallback={<p>Please, wait, loading data...</p>}>
        <StyledHeader>
          <StyledNav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </StyledNav>
        </StyledHeader>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
};
