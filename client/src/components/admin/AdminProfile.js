import React from 'react';
import { NavMenuBar } from '../loggedin/NavMenuBar'
import {UserList} from './UserList';

export const AdminProfile = ({username, users}) => (
    <div className='admin-profile'>
        <NavMenuBar username={username}/>
        <UserList users={users}/>
    </div>
)