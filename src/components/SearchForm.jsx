import { useState } from 'react';

function SearchForm({ setMovies, setLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=6a5042bd&s=${query}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        alert('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error al buscar:', error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Buscar película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;
