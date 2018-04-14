import React from 'react';

export const LoginHeader = () => (
    <div className='header'>
        <div className='title'>
            <h1><a href='localhost:3000/' title='Go to basedbook home' className='button'></a>Basedbook</h1>
        </div>
        <form className='login form-group' method='POST' action=''>
            <label className='user-login row1 col1'>Email or Phone</label>
            <input id='user-id' className='form-control row2 col1' type='text' name='user-id'></input>
            <label className=' user-login row1 col2'>Password</label>
            <input className='user-password form-control row2 col2' type='password' name='user-password'></input>
            <button className='btn btn-primary row2 col3'>Log In</button>
        </form>
    </div>
)