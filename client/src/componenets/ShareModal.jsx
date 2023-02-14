import { CloseOutlined, CopyAll, CopyAllOutlined, Facebook, FacebookOutlined, Instagram, LinkOutlined, Telegram, Twitter, WhatsApp } from '@mui/icons-material';
import React from 'react';

export default function ShareModal() {
  return (
    <div className='share-modal'>
        <header>
            <span>Share Modal</span>
            <CloseOutlined className='close'/>
        </header>
        <div className="content">
            <p>Share this link via</p>
            <ul className="icons">
                <a href="#" className='facebook'><Facebook/></a>
                <a href="#" className='twitter'><Twitter/></a>
                <a href="#" className='instagram'><Instagram/></a>
                <a href="#" className='whatsapp'><WhatsApp/></a>
                <a href="#" className='telegram'><Telegram/></a>
            </ul>
            <p>Or Copy Link</p>
            <div className="field">
                <LinkOutlined />
                <input type="text" value='example.com/share-link'/>
                <button><CopyAll /></button>
            </div>
        </div>

    </div>
  );
}
