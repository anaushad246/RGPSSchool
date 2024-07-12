
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        <li className="hover:text-gray-200">
          <a href="/" className="text-white">Home</a>
        </li>
        <li className="hover:text-gray-200">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="text-white"
          >
            Menu
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose} component="a" href="/home">Home</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/academics">Academics</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/events">Events</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/gallery">Gallery</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/about">About Us</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/contact">Contact</MenuItem>
            
            
          </Menu>
        </li>
      </ul>
    </nav>
  );
}

