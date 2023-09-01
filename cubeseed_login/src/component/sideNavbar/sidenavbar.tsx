import Link from 'next/link';
import React from 'react';
import '../../styles/SideNavBar.css'

export default function SideNavBar() {

    return (
        <ul id = 'side-nav-bar'>
            <img id = 'side-nav-bar-logo'src = 'https://cubeseed.com.ng/wp-content/uploads/2023/06/image-185x41.png'/>
            <div className = 'border-bottom-div'></div>
            <span id = 'user-name'>Hello User, </span>


            <div id = 'clickable-link-components'>
                <span id = 'home-welcome'>Home</span>
                <span>Opened Purchase Orders</span>
                <span> Purchase Orders</span>
                <span>Profile</span>
            </div>

            <div className ='settingsandsupportDiv'>
                <span>Settings</span>
                <span>Support</span>

            </div>
        </ul>
    )
}
