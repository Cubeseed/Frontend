// Registration.js

import React, { useContext, useEffect, useState } from 'react';
import {useUserContext} from '../context/UserContext';

const Registration = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupUrl, setSelectedGroupUrl] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('active');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);

  useEffect(() => {
    fetch('http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/groups/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGroups(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const {setUsernameContext, setPasswordContext, setUserIdContext} = useUserContext();

  const updateIsActiveStatus = async (userId) => {
    try {
      const response = await fetch(`http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/${userId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          is_active: true
        }),
      });

      if (response.ok) {
        console.log("Successfully updated is_active status");
      } else {
        console.log("Failed to update is_active status");
      }
    } catch (error) {
      console.error("There was a problem updating the is_active status:", error);
    }
  };

  const handleGroupChange = (e) => {
    const selectedName = e.target.value;
    const selectedUrl = groups.find(group => group.name === selectedName).url;

    setSelectedGroup(selectedName);
    setSelectedGroupUrl(selectedUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isActive = (status === 'active');

    const payload = {
      username: name,
      email: email,
      groups: [selectedGroupUrl],
      password: password,
      is_active: isActive
    };

    try {
      const response = await fetch('http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        //setRegisteredUser(data);
        setUsernameContext(name);
        setPasswordContext(password);

        const urlParts = data.url.split('/');
        const userId = urlParts[urlParts.length - 2];
        setUserIdContext(userId);
        console.log(userId);

        updateIsActiveStatus(userId); 

        const groupNames = data.groups.map((groupUrl) => {
          const group = groups.find(g => g.url === groupUrl);
          return group ? group.name : 'Unknown';
        });
        
        setRegisteredUser({...data, groups: groupNames});
      } else {
        const data = await response.json();
        console.log("Registration failed:", data);
      }
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }
  };


  return (
    <div>
      <h1>Registration Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {registeredUser ? (
        <div>
          <h2>Registered User Information</h2>
          <p>Username: {registeredUser.username}</p>
          <p>Email: {registeredUser.email}</p>
          <p>Groups: {registeredUser.groups.join(', ')}</p>
          <p>Status: {registeredUser.is_active ? 'Active' : 'Non-Active'}</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <h2>Select Your Group:</h2>
        {groups.map((group, index) => (
          <div key={index}>
            <input
              type="radio"
              id={group.name}
              name="group"
              value={group.name}
              onChange={handleGroupChange}
            />
            <label htmlFor={group.name}>{group.name}</label>
          </div>
        ))}

        <h2>User Information:</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        
        <h2>Status:</h2>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="non-active">Non-Active</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      )}
    </div>
  );
};

export default Registration;



// testuser7
// put the admin access token into the bearer token in auth.

// curl --location --request PUT 'http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/7/' \
// --header 'Content-Type: application/json' \
// --header 'Accept: application/json' \
// --header ' X-CSRFToken: gC7cxrl7cik8HlrxiYeJWwOSsLoYQKHoTauLYgs1zjrJuex1VpuLlrc0irKafuM2' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTE0MTc4LCJpYXQiOjE2OTQxMTM4NzgsImp0aSI6ImZkYTM5MDJjN2RkYzQ3OGJiOWY1Y2FhNjU4MjM0MjIyIiwidXNlcl9pZCI6MX0.RbjBUTLS0jMrcV7yTZW_qvL1QSFMCwt56HF6gnZSmLc' \
// --form 'username="testuser3"' \
// --form 'password="userpass3"' \
// --form 'groups="http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/groups/2/"' \
// --form 'is_active="true"'