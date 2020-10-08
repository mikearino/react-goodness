import React, { useState } from 'react';
const movies = [
  {
    name: '36th chamber',
  },
  {
    name: 'Five Deadly Venoms',
  },
  {
    name: 'Man of Iron',
  },
];
export function MoviesList() {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <label>
        Filter:
        <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      </label>
      <ul>
        {movies
          .filter((movie) =>
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <li key={movie.name}>{movie.name}</li>
          ))}
      </ul>
    </div>
  );
}
