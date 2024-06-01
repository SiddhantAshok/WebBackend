import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, []); // Ensure this effect runs only once by providing an empty dependency array

  return (
    <>
      <h1>Full stack with Siddhant</h1>

      <p>Jokes: {jokes.length}</p>

      {Array.isArray(jokes) && jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
