import React, { Component } from 'react';

export const UserList = ({users}) => (
    
      <div>
        <table>
          <thead>
            <tr>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user.id}>{user}</tr>)}
          </tbody>
        </table>
      </div>
    
)
