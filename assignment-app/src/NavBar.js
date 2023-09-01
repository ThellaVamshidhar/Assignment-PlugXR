// NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = ({ onSaveClick }) => {
  return (
    <div>
      {/* First Navbar with color #004d4d */}
      <AppBar position="static" style={{ backgroundColor: '#004d4d' }}>
        <Toolbar>
          <div className="navbar1"> {/* Add your content here for the first navbar */}</div>
        </Toolbar>
      </AppBar>

      {/* Second Navbar with Save button and color #f2f2f2 */}
      <AppBar position="static" style={{ backgroundColor: '#f2f2f2' }}>
        <Toolbar>
          <div className="navbar2">
            <Button variant="contained" color="primary" onClick={onSaveClick}>
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
