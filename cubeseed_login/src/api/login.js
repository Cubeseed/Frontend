export default function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      
      // Perform authentication logic here, e.g., validate credentials against a database
      // If the login is successful, return a response with status 200
      // If the login fails, return an error response with status 401 (Unauthorized)
      
      // Example implementation:
      if (username === 'user@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  