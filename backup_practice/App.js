import React, { useState } from 'react';
import DraggableButton from './DraggableButton';
import DropBox from './DropBox';
import './App.css';

function App() {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(true);
  };

  return (
    <div className="App">
      <h1>Drag and Drop Example</h1>
      <div className="container">
        <DraggableButton />
        <DropBox isDropped={isDropped} onDrop={handleDrop} />
      </div>
    </div>
  );
}

export default App;