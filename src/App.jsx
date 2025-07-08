import { useState } from 'react';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <h1>🎬 Buscador de Películas</h1>
      <SearchForm setMovies={setMovies} setLoading={setLoading} />
      {loading ? <p>Buscando...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default App;
