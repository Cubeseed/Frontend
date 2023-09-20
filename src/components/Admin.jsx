import React, {useState, useEffect} from 'react'

const  Admin = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [activeUsername, setActiveUsername] = useState("");
    const [showActiveUserInput, setShowActiveUserInput] = useState(false);
    const [activeMessage, setActiveMessage] = useState(null);

    const [deActiveUsername, setDeActiveUsername] = useState(""); // State for the username to be de-activated
    const [showDeActiveUserInput, setShowDeActiveUserInput] = useState(false); // State to toggle the "De-Active User" input
    const [deActiveMessage, setDeActiveMessage] = useState(null); // State to display de-activation status message



    const fetchToken = async() => {
        try {
            const response = await fetch('http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/auth/token/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: 'admin',
                    password: 'admin123',
                })
            });

            const data = await response.json();
            if(response.ok) {
                setToken(data.access);
            } else {
                setError(data.detail || "Failed to fetch token.");
            }
        } catch (error) {
            setError("An error occurred while fetching token.");
        }
    }
        

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/',{
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
            );
            const data = await response.json();

            if(response.ok) {
                setUsers(data.results);
            } else {
                setError(data.detail || "Failed to fetch users.");
            } 
        } catch (error) {
            setError("An error occurred while fetching users.");
        }
        setLoading(false);
    }

    const toggleUserInfo = () => {
        setShowUserInfo(!showUserInfo);
    }


    const handleUserActiveStatus = async (isActive, username, setMessage) => {
        try {
          const user = users.find(user => user.username === username);
          if (!user) {
            setMessage("User not found.");
            return;
          }
    
          const userId = user.url.split('/').slice(-2, -1)[0]; // Extracts the user id from the URL
    
          // Make API request to change active status of the user
          const response = await fetch(`http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/${userId}/`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              // ... Add Authorization headers here
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              is_active: isActive,
            }),
          });
    
          if (response.status === 200) {
            setMessage("Operation successful!");
          } else {
            setMessage("Operation failed.");
          }
        } catch (error) {
          console.error("An error occurred:", error);
          setMessage("Operation failed.");
        }
      };

    const handleActiveUser = async () => {
        try{
            const user = users.find(user => user.username === activeUsername);
            if(!user) {
                setActiveMessage("User not found.");
                return;
            }
            const userId = user.url.split('/').slice(-2, -1)[0];

            const response = await fetch(`http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/${userId}/`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    is_active: true,
                })
            });

            if (response.status === 200) {
                setActiveMessage("Activation successful!");
            } else {
                setActiveMessage("Activation failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            setActiveMessage("Activation failed.");
        }
    }

    useEffect(() => {
        fetchToken();
    },[]);




  return (
    <div> 
        <h1>Admin User Page</h1>
        <button onClick={fetchUsers}>Get All Users' Info</button>
        {users && (
            <button onClick={toggleUserInfo}>
                {showUserInfo ? "Hide User Info" : "Show User Info"}
            </button>
        )}

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {showUserInfo && users && (
            <div>
                <h2>Users Info:</h2>
                <br/>
                <pre>{Array.isArray(users) ? JSON.stringify(users, null, 2) : "Invalid user data"}</pre>
            </div>
        )}

        {/* <button onClick={() => setShowActiveUserInput(!showActiveUserInput)}>Active User</button>

        {showActiveUserInput && (
            <div>
                <input
                    type="text"
                    placeholder="Username to activate"
                    value={activeUsername}
                    onChange={(e) => setActiveUsername(e.target.value)}
                />
                <button onClick={handleActiveUser}>Activate This User</button>
            </div>
        )}

        {activeMessage && <p>{activeMessage}</p>} */}

         {/* Active User Section */}
      <button onClick={() => setShowActiveUserInput(!showActiveUserInput)}>Active User</button>
      {showActiveUserInput && (
        <div>
          <input
            type="text"
            placeholder="Username to activate"
            value={activeUsername}
            onChange={(e) => setActiveUsername(e.target.value)}
          />
          <button onClick={() => handleUserActiveStatus(true, activeUsername, setActiveMessage)}>Activate This User</button>
        </div>
      )}
      {activeMessage && <p>{activeMessage}</p>}

       {/* De-Active User Section */}
       <button onClick={() => setShowDeActiveUserInput(!showDeActiveUserInput)}>De-Active User</button>
      {showDeActiveUserInput && (
        <div>
          <input
            type="text"
            placeholder="Username to de-activate"
            value={deActiveUsername}
            onChange={(e) => setDeActiveUsername(e.target.value)}
          />
          <button onClick={() => handleUserActiveStatus(false, deActiveUsername, setDeActiveMessage)}>De-Activate This User</button>
        </div>
      )}
      {deActiveMessage && <p>{deActiveMessage}</p>}

      
    </div>
  )
}

export default  Admin