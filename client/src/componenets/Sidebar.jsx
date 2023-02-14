import React from 'react';

export default function Sidebar() {
  return (
    <nav className='sidebar'>
       <ul>
            <li>
                <a href="">
                    <img src="" alt="" />
                    <span>BIGSHARE</span>
                </a>
            </li>
            <li><a href=""> <i className=''/><span>EXPLORE</span></a></li>
            <li><a href=""> <i className=''/><span>WATCH</span></a></li>
            <li><a href=""> <i className=''/><span>LISTEN</span></a></li>
            <li><a href=""> <i className=''/><span>READ</span></a></li>
            <li><a href=""> <i className=''/><span>PODCASTS</span></a></li>
            <li><a href=""> <i className=''/><span>WRITE</span></a></li>
            <li><a href=""> <i className=''/><span>DASHBOARD</span></a></li>
       </ul>
    </nav>
  );
}
