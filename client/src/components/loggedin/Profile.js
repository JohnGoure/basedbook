import React from 'react'

export const Profile = ({username}) => (
    <div className='user-profile'>
        <img className='cover-img' src=''></img>
        <img className='profile-img' src=''></img>
        <div className='friend-list'>
            <p>Friends</p>
        </div>
        <div className='photo-list'>
            <p>Photos</p>
        </div>
        <div className='comment-sec'>
            <p>Comments</p>
        </div>
    </div>
)