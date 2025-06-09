import React, { useState } from 'react';

function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Derived state - computed during render
  const fullName = firstName + ' ' + lastName;

  return (
    <div>
      <h2>Let's check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}

export default FormTicket; 