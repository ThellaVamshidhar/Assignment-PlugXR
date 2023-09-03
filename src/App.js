// App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sections from './components/Sections';
import SaveModal from './components/SaveModal';
import Footer from './components/Footer';
import './App.css'
function App() {
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
 
  const handleSaveClick = () => {
    setSaveModalOpen(true);
  };

  const handleCloseSaveModal = () => {
    setSaveModalOpen(false);
  };

  return (
    <div className="app">
      <NavBar onSaveClick={handleSaveClick} />
      <Sections />

      <SaveModal
        open={isSaveModalOpen}
        onClose={handleCloseSaveModal}
        width="200px" // Specify the desired width
        height="200px" // Specify the desired height
        backgroundColor="#e6f2ff" // Specify the desired background color
      />
      <Footer />
    </div>
  );
}

export default App;
