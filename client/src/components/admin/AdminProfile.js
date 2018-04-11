import React from 'react';
import {UserList} from './UserList';

export const AdminProfile = ({username, users}) => (
    <div className='admin-profile'>
        <p>{username}</p>
        <UserList users={users}/>
    </div>
)