import React from 'react';
import {MessageHeader} from './MessageHeader'
import {Reaction} from './Reaction'

export const Message = (imgURL, username, userAssociation, description) => (
    <div className='message'>
        <img src={imgURL}></img>
        <MessageHeader className='message-header' username={username} userassociation={userAssociation} />
        <div className='description'>
            {description}
        </div>
        <Reaction />
    </div>
)