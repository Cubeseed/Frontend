import Link from 'next/link';
import React, { useState } from 'react'; // Import useState
import '../../styles/SideNavBar.css';

export default function SideNavBar() {
  // Define state to track the selected link
  const [selectedLink, setSelectedLink] = useState('Home');

  // Function to handle link selection
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <ul id='side-nav-bar'>
      <div className='top'>
        <img
          id='side-nav-bar-logo'
          src='https://cubeseed.com.ng/wp-content/uploads/2023/06/image-185x41.png'
        />
        <div className='border-bottom-div'></div>
        <span id='user-name'>Hello User, </span>

        <div id='clickable-link-components'>
          <span
            className={selectedLink === 'Home' ? 'selected' : ''}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </span>
          <span
            className={selectedLink === 'Opened Purchase Orders' ? 'selected' : ''}
            onClick={() => handleLinkClick('Opened Purchase Orders')}
          >
            Opened Purchase Orders
          </span>
          <span
            className={selectedLink === 'Purchase Orders' ? 'selected' : ''}
            onClick={() => handleLinkClick('Purchase Orders')}
          >
            Purchase Orders
          </span>
          <span
            className={selectedLink === 'Profile' ? 'selected' : ''}
            onClick={() => handleLinkClick('Profile')}
          >
            Profile
          </span>
        </div>
      </div>
      <div className='settingsandsupportDiv'>
        <span>Settings</span>
        <span>Support</span>
      </div>
    </ul>
  );
}
