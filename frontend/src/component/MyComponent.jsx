import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/mymodel/')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>My Data:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.field}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent