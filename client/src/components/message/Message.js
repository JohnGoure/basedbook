import React from 'react';

export const Message = (user_profile_img, username, user_association, description) => (
    <div className='message'>
        <img src={user_profile_img}></img>
        <div className='message-title'>
            {username}{user_association}
        </div>
        <div className='description'>
            {description}
        </div>
    </div>
)