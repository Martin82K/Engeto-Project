import React, { useState } from 'react';
import './QRgenerator.css';

const QRGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    if (!inputValue) {
      alert('Prosím, zadejte URL nebo text pro vygenerování QR kódu.');
      return;
    }

    const size = '150x150';
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(inputValue)}`;
    setQrCodeUrl(apiUrl);
  };

  return (
    <div className="qr-generator-container">
      <div className="input-section">
        <h2>Vložte URL nebo text</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Text nebo URL"
        />
        <button onClick={generateQRCode} className="generate-button">
          Generovat QR kód
        </button>
      </div>
      <div className="qr-code-section">
        <h2>Váš QR kód</h2>
        <div>
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR kód" />}
        </div>
        
      </div>
    </div>
  );
};

export default QRGenerator;
