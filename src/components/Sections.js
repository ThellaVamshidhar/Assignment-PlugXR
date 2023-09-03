// Sections.js
import React, { useState, useEffect, createRef } from 'react';
const MIN_WIDTH = 400;

const sectionStyle = {
  height: '100%', // Make the sections take up full viewport height
};

const leftSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#e6f7ff', // Change the background color for the left section
};

const rightSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#e6f7ff', // Change the background color for the right section
};

const buttonRowStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px', // Increased margin for more spacing
};

const buttonStyle = {
  backgroundColor: '#d9d9d9',
  padding: '40px', // Increased padding for larger button size
  margin: '20px', // Increased margin for more spacing
  border: 'none',
  cursor: 'pointer',
};

const LeftPane = ({ children, leftWidth, setLeftWidth }) => {
  const leftRef = createRef();

  useEffect(() => {
    if (leftRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftRef.current.clientWidth);
        return;
      }

      leftRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftRef, leftWidth, setLeftWidth]);

  return <div ref={leftRef}>{children}</div>;
};
const Sections = () => {
  const [leftWidth, setLeftWidth] = useState(undefined); // Initial width of the left section
    
  const [separatorXPosition, setSeparatorXPosition] = useState(undefined);
  const [dragging, setDragging] = useState(false);

  const splitPaneRef = createRef();

  const onMouseDown = (e) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };

  const onTouchStart = (e) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setDragging(true);
  };
  const onMove = (clientX) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH);
        return;
      }

      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth;

        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH);
          return;
        }
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onResize = (event, { size }) => {
    setLeftWidth(size.width);
  };
  
  const onMouseMove = (e) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onTouchMove = (e) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseUp = () => {
    setDragging(false);
  };


  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div className="sections" style={{ height: 'calc(100vh - 196px)', display: 'flex' }}>
      {/* Left Section */}
      <LeftPane leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
      <div 
        width={leftWidth}
        height={Infinity}
        onResize={onResize}
        style={{ ...leftSectionStyle, flex: 1, position: 'relative' }}
      ><div className="left-section" style={{ ...sectionStyle }}>
          {/* Add 9 buttons in rows of 3 */}
          <div style={buttonRowStyle}>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
          </div>
          <div style={buttonRowStyle}>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
          </div>
          <div style={buttonRowStyle}>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
            <button style={buttonStyle}></button>
          </div>
        </div>     
        </div>
         </LeftPane>


      {/* Divider */}
      <div
        className="divider-hitbox"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      >
        <div className="divider" />
      </div>
      {/* Middle Section */}
      <div className="middle-section" style={{ ...sectionStyle, flex: 1 }}></div>
        {/* Add your content here */}
      

      {/* Divider */}
      <div
        className="divider-hitbox"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
      >
        <div className="divider" />
      </div>
      {/* Right Section */}
      <div className="right-section" onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp} style={{ ...rightSectionStyle, flex: 1 }}>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Sections;
