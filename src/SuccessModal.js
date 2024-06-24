import React from 'react';
import './SuccessModal.css';
import Confetti from 'react-confetti';

const SuccessModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
                <h2>Success!</h2>
                <p>You dropped the button in the correct area.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SuccessModal;