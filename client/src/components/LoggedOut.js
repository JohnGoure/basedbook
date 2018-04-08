import React from 'react';
import {LoginHeader} from './LoginHeader';
import {CreateUserForm} from './CreateUserForm';
import {Highlights} from './Highlights';
 
export const LoggedOut = () => (
<div>
    <LoginHeader />
    <div className='content container'>
        <Highlights />
        <CreateUserForm />
    </div>
</div>
)