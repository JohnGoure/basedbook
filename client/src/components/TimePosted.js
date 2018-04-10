import React from 'react';

let date = new Date()
date.getDate()

function timeDifference(time) {
    return ('To be implemented later')
} 

export const TimePosted = () => (
    <div className='post-time'>
        {timeDifference()}
    </div>
)