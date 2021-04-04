import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
    <aside className='sidebar'>
      <nav className='navigation'>
        <ul>
          <li className='item'><NavLink to='/mail' className='link' exact>Buyer massage</NavLink></li>
          <li className='item'><NavLink to='/mail/other' className='link' exact>Other</NavLink></li>
          <li className='item'><NavLink to='/mail/send' className='link' exact>Send</NavLink></li>
          <li className='item'><NavLink to='/mail/replies' className='link' exact>Replies</NavLink></li>
          <li className='item'><NavLink to='/mail/direct' className='link' exact>Direct</NavLink></li>
          <li className='item'><NavLink to='/mail/automatic' className='link' exact>Automatic</NavLink></li>
        </ul>
      </nav>
      <nav className='navigation navigation-2'>
        <div className='title'>Contacts</div>
        <ul>
          
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar
