import React, { useState, useEffect } from 'react';
import DraggableButton from './DraggableButton';
import DropArea from './DropArea';
import SuccessModal from './SuccessModal';

import './App.css';

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'magenta'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [dropAreas, setDropAreas] = useState([]);
  const [buttonColor, setButtonColor] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [shakeDropArea, setShakeDropArea] = useState(null);

  useEffect(() => {
    generateNewGame();
  }, []);

  const generateNewGame = () => {
    const shuffledColors = shuffle([...colors]);
    const newDropAreas = shuffledColors.slice(0, 3);
    const randomIndex = Math.floor(Math.random() * 3);
    const newButtonColor = newDropAreas[randomIndex];

    console.log('New drop areas:', newDropAreas);
    console.log('New button color:', newButtonColor);

    setDropAreas(newDropAreas);
    setButtonColor(newButtonColor);
    setMessage('');
  };

  const handleDrop = (droppedColor, dropAreaColor) => {

    if (droppedColor === dropAreaColor) {
      setShowModal(true);
    } else {
      setMessage(`Color didn't match! Try again.`);
      setShakeDropArea(dropAreaColor);
      setTimeout(() => setShakeDropArea(null), 500); // Remove shake class after animation
    }
  };

  const closeModal = () => {
    setShowModal(false);
    generateNewGame();
  };

  return (
    <div className="App">
      <h1>Color Matching Game</h1>
      {buttonColor && <DraggableButton key={buttonColor} color={buttonColor} />}
      <div className="drop-areas">
        {dropAreas.map((color, index) => (
          <DropArea key={index} color={color} onDrop={handleDrop} shouldShake={shakeDropArea === color} />
        ))}
      </div>
      {message && <p className="message">{message}</p>}
      {showModal && <SuccessModal onClose={closeModal} />}
    </div>
  );
}

export default App;