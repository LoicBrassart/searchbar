import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [needle, setNeedle] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/games?needle=${needle}`)
      .then(({ data }) => {
        setResults(data);
      })
      .catch();
  }, [needle]);

  const handleNeedleChange = (evt) => {
    setNeedle(evt.target.value);
  };

  return (
    <>
      <input type='search' value={needle} onChange={handleNeedleChange} />
      <ul>
        {results.map((result) => {
          return <li>{result.name}</li>;
        })}
      </ul>
    </>
  );
}
