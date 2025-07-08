function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="no-poster">Sin imagen</div>
      )}
      <h3>{movie.Title}</h3>
      <p>{movie.Year} - {movie.Type}</p>
    </div>
  );
}

export default MovieCard;
