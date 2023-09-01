// Sections.js
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Resizable } from 'react-resizable';

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

const dividerStyle = {
  backgroundColor: '#ccc',
  width: '10px', // Width of the divider
  cursor: 'col-resize', // Cursor style for resizing
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

const Sections = () => {
  const [leftWidth, setLeftWidth] = useState(200); // Initial width of the left section

  const onResize = (event, { size }) => {
    setLeftWidth(size.width);
  };

  return (
    <div className="sections" style={{ height: '75vh', display: 'flex' }}>
      {/* Left Section */}
      <Resizable
        width={leftWidth}
        height={Infinity}
        onResize={onResize}
        style={{ ...leftSectionStyle, flex: 1, position: 'relative' }}
      >
        <div className="left-section" style={{ ...sectionStyle }}>
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
      </Resizable>

      {/* Divider */}
      <div style={dividerStyle}></div>

      {/* Middle Section */}
      <div className="middle-section" style={{ ...sectionStyle, flex: 1 }}>
        {/* Add your content here */}
      </div>

      {/* Divider */}
      <div style={dividerStyle}></div>

      {/* Right Section */}
      <div className="right-section" style={{ ...rightSectionStyle, flex: 1 }}>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Sections;
