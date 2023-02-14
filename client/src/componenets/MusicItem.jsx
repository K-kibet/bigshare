import { FavoriteOutlined, ShareOutlined, Visibility, VisibilityOutlined } from '@mui/icons-material';
import React from 'react';

export default function MusicItem() {
  return (
    <div className='music-item'>


        <div className="bottom">
            <div>
                <span>12K</span>
                <FavoriteOutlined />
            </div>
            <div>
                <span>500</span>
                <ShareOutlined />
            </div>
            <div>
                <span>800</span>
                <VisibilityOutlined />
            </div>
            
            
            
        </div>
    </div>
  );
}
