import React from 'react';

export const CreateUserForm = () => (
    <div className='rightside'>
        <h1><strong>Sign Up</strong></h1>
        <h4>It's free and always will be</h4>
        <form method='POST' action=''>
            <div className='form-row'>
                <div className='form-group col-sm-5'>
                    <input className='form-control' type='text' placeholder='First name' name='first_name' required='true'></input>
                </div>
                <div className='form-group col-sm-5'>
                    <input className='form-control' type='text' placeholder='Last name' name='family_name' required='true'></input>
                </div>
                <div className='form-group col-md-10'>
                    <input id='phone_number' className='form-control' type='number' placeholder='Mobile number or Email' name='phonenumber' required='true'></input>
                </div>
                <div className='form-group col-md-10'>
                    <input id='password' className='form-control' type='password' placeholder='New Password' name='new-password' required='true'></input>
                </div>
                <div className='form-group col-md-10'>
                    <label>Date of Birth</label>
                    <input id='birth-day' className='form-control' type='date' name='birth-date' required='true'></input>
                </div>
                <div className='form-group col-md-10'>
                    <input id='female' className='gender form-check-input' type='radio' name='gender' value='female'></input>
                    <label className='form-check-label'>Female</label>
                    <input id='male' className='gender form-check-input' type='radio' name='gender' value='male'></input>
                    <label className='form-check-label'>Male</label>
                </div>
            </div>
            <p id='agreement'>By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from Facebook and can opt out at any time.</p>
            <button className='btn' id='create-account' type='submit'>Create Account</button>
            <p><button className='btn btn-link' href='/localhost:3000'>Create a page</button>for a celebrity, band or business</p>
        </form>
    </div>
)