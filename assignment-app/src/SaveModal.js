// SaveModal.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import Draggable from 'react-draggable';

const SaveModal = ({ open, onClose, width, height, backgroundColor }) => {
  const dialogStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    position: 'relative',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Draggable handle=".modal-header">
        <div style={dialogStyle}>
          <div className="modal-header">
            <div
              onClick={onClose}
              style={closeButtonStyle}
            >
              &times; {/* Close symbol (X) */}
            </div>
          </div>
        </div>
      </Draggable>
    </Dialog>
  );
};

export default SaveModal;
