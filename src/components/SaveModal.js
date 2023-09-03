// SaveModal.js
import React, {useState, useRef} from 'react';
import Dialog from '@mui/material/Dialog';
import Draggable from 'react-draggable';

const SaveModal = ({ open, onClose, width, height, backgroundColor }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [styles, setStyles] = useState({});
  const firstPos = useRef(null);
  const dragElementRef = useRef(null);

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
  const handleDragEnd = (e) => {
    console.log("Drag End");
    setIsDragging(false);
  };
  
  const handleDragStart = (e) => {
    firstPos.current = {
      x: e.clientX,
      y: e.clientY,
      container: dragElementRef.current.getBoundingClientRect()
    };
    setIsDragging(true);
  };

  const handleDragging = (e) => {
    if (isDragging) {
      let left =
        firstPos.current.container.left + e.clientX - firstPos.current.x;
      let top = firstPos.current.container.top + e.clientY - firstPos.current.y;
      setStyles({
        left: left,
        top: top
      
      });
    }
  };


  return (
    <Dialog open={open} onClose={onClose} 
    className={"draggable-popup"} // position: absolute
    style={styles}
    onMouseDown={handleDragStart}
    onMouseMove={handleDragging}
    onMouseUp={handleDragEnd}
    ref={dragElementRef}>
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
