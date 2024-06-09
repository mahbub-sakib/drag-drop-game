import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Success!</h2>
                <p>You dropped the button in the correct area.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SuccessModal;