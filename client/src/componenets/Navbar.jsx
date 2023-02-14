import React from 'react';

export default function Navbar() {
  return (
    <nav className='Navbar'>
       <ul>
            <li><a href=""> <i className='fas fa-user'/><span>VIDEOS</span></a></li>
            <li><a href=""> <i className=''/><span>MUSIC/AUDIO</span></a></li>
            <li><a href=""> <i className=''/><span>FOLDERS</span></a></li>
            <li><a href=""> <i className=''/><span>TEXT</span></a></li>
            <li><a href=""> <i className=''/><span>IMAGES</span></a></li>
            <li><a href=""> <i className=''/><span>BOOKMARKS</span></a></li>
            <li><a href=""> <i className=''/><span>NOTIFICATIONS</span></a></li>
            <li><a href=""> <i className=''/><span>SUBSCRIPTIONS</span></a></li>
       </ul>
    </nav>
  );
}
