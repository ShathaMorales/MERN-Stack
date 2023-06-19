import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import DisplayBox from './components/DisplayBox';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, size) => {
    setBoxes([...boxes, { color, size }]);
  }

  return (
    <div className="App">
      <Box showForm={addBox} />
      <DisplayBox displayBox={boxes} />
    </div>
  );
}

export default App;
