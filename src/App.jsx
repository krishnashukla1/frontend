
import React, { useState } from 'react';
import './App.css'


function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch('https://krishnashukla.com/api/name', {


    // const res = await fetch('http://localhost:5000/api/name', {
      const res = await fetch('https://backend-hpok.onrender.com/api/name', {


      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await res.json();
    setResponse(data.message);
    setName('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🚀Hi, I am Krishna Shukla!! Welcome to My First Live Site!</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
