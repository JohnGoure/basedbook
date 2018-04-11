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
            {users.map(user => <tr key={user.id}>{user.username}</tr>)}
          </tbody>
        </table>
      </div>
    
)
