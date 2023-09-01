// App.js
import React, { useState } from 'react';
import NavBar from './NavBar';
import Sections from './Sections';
import SaveModal from './SaveModal';
import Footer from './Footer';
import Draggable from 'react-draggable'; // Import Draggable

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
