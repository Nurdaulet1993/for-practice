import { useEffect, useState } from "react";

const KEY = 'fbba783c';
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('in');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovies();
  }, [])

  async function getMovies() {
    try {
      setLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm}&page=2`);
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      if (data.Response === 'False') throw new Error('Movie not found');
      setMovies(data.Search);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-4">
      {
        movies.length > 0 &&
        <ul className="flex flex-wrap gap-4">
          {movies.map(movie => (
            <li key={movie.imdbID} className="p-2 border rounded shadow">
              <img src={movie.Poster} alt={movie.Title}/>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}
