import React, { useState } from 'react';
import {useRouter} from 'next/router'


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()
 

  const handleLogin = async () => {
    try {
      const response = await fetch('http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/auth/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.status === 200) {
        setMessage("Login successful!");

        // check if the user is admin
        if (username === 'admin' && password === 'admin123') {
          setMessage("Admin login successful!");
          router.push('/admin'); // Navigate to the admin page
          return;
        }

      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setMessage("Login failed");
    }
  };
  

  return (
    <div>
    <h1>Login</h1>
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
    <div>
      <p>{message}</p>
    </div>
  </div>
  );
}

export default Login;
