import React, { useState } from 'react';
import QRbackground from "../src/assets/qr-bg.jpg";

const QrCodeGenerator = () => {

    const [inputValue, setInputValue] = useState("https://");
    const [qrCode, setQrCode] = useState("");
    
    const codeGenerate = () => {
        if (!inputValue.trim() || inputValue === "https://") {
            alert("Enter text or URL");
            return;
        }
        setQrCode (`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.trim() === "https://" || value.trim() === "") {
            setQrCode("");
        }
    };

  return (
    <div 
      className='flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4' 
      style={{ backgroundImage: `url(${QRbackground})` }}
    >
        <div className='bg-transparent  shadow-lg rounded-lg p-6 max-w-md w-full text-center sm:w-11/12 sm:p-4 border '>

            <h1 className='text-2xl text-white font-bold mb-4 sm:text-xl'>
                QR Code Generator
            </h1>

            <label className='block text-lg text-white font-medium mb-2 sm:text-base'>
                Enter your text or URL
            </label>

            <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded mb-4 text-lg sm:text-base sm:p-1'
                placeholder='Text or URL'
                value={inputValue}
                onChange={handleInputChange}
            />

            {qrCode && <img src={qrCode} alt='Qr Code' className='mx-auto my-4 w-40 sm:w-32'/>}

            <button
                className='w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-2 rounded-lg text-lg hover:bg-blue-600 transition sm:text-base sm:py-1'
                onClick={codeGenerate}
            >
                Generate QR Code
            </button>

        </div>
        <footer className='absolute bottom-4 text-white sm:text-sm sm:bottom-2'>
            By Velmurugan
        </footer>
    </div>
  );
}

export default QrCodeGenerator;