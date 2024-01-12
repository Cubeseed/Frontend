import React, { useState, useEffect } from "react";
import "@/styles/NewFarmersTable.css";
import "tailwindcss/tailwind.css";
import ReactPaginate from "react-paginate";
import {
  ChevronDownOutline,
  CheckmarkCircleOutline,
  CloseCircleOutline,
} from "react-ionicons";

interface Farmer {
  id: number;
  name: string;
  email: string;
  time: string;
  certificate: string | null;
  code: number | null;
  document1: string | null;
  document2: string | null;
}

interface Token {
  refresh: string;
  access: string;
  detail: string;
}

interface User {
  url: string;
  //id: number;
  username: string;
  email: string;
  is_active: boolean;
}

class UserImpl implements User {
  url: string;
  username: string;
  email: string;
  is_active: boolean;

  constructor(
    url: string,
    username: string,
    email: string,
    is_active: boolean
  ) {
    this.url = url;
    this.username = username;
    this.email = email;
    this.is_active = is_active;
  }

  get id(): number {
    return parseInt(this.url.split("/").slice(-2, -1)[0]);
  }
}

interface NewFarmersTableProps {}

const NewFarmersTable: React.FC<NewFarmersTableProps> = () => {
  //sample data for testing -- replace with 'users' variable//
  // const sampleFarmers = [
  //   {
  //     id: 1,
  //     name: "farmer1",
  //     email: "farmer1@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Utility Bill",
  //     document2: "Picture of Farm",
  //   },
  //   {
  //     id: 2,
  //     name: "farmer2",
  //     email: "farmer2@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Picture of Farm",
  //     document2: "Document of Land Ownership",
  //   },
  //   {
  //     id: 3,
  //     name: "farmer3",
  //     email: "farmer3@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Document of Land Ownership",
  //     document2: "Utility Bill",
  //   },
  //   {
  //     id: 4,
  //     name: "farmer4",
  //     email: "farmer4@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Utility Bill",
  //     document2: "Picture of Farm",
  //   },
  //   {
  //     id: 5,
  //     name: "farmer5",
  //     email: "farmer5@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Picture of Farm",
  //     document2: "Document of Land Ownership",
  //   },
  //   {
  //     id: 6,
  //     name: "farmer6",
  //     email: "farmer6@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Document of Land Ownership",
  //     document2: "Utility Bill",
  //   },
  //   {
  //     id: 7,
  //     name: "farmer7",
  //     email: "farmer7@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Utility Bill",
  //     document2: "Picture of Farm",
  //   },
  //   {
  //     id: 8,
  //     name: "farmer8",
  //     email: "farmer8@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Picture of Farm",
  //     document2: "Document of Land Ownership",
  //   },
  //   {
  //     id: 9,
  //     name: "farmer9",
  //     email: "farmer9@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Document of Land Ownership",
  //     document2: "Utility Bill",
  //   },
  //   {
  //     id: 10,
  //     name: "farmer10",
  //     email: "farmer10@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Utility Bill",
  //     document2: "Picture of Farm",
  //   },
  //   {
  //     id: 11,
  //     name: "farmer11",
  //     email: "farmer11@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Picture of Farm",
  //     document2: "Document of Land Ownership",
  //   },
  //   {
  //     id: 12,
  //     name: "farmer12",
  //     email: "farmer12@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Document of Land Ownership",
  //     document2: "Utility Bill",
  //   },
  //   {
  //     id: 13,
  //     name: "farmer13",
  //     email: "farmer13@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Utility Bill",
  //     document2: "Picture of Farm",
  //   },
  //   {
  //     id: 14,
  //     name: "farmer14",
  //     email: "farmer14@gmail.com",
  //     time: "5/1/23",
  //     certificate: "document.pdf",
  //     code: null,
  //     document1: "Picture of Farm",
  //     document2: "Document of Land Ownership",
  //   },
  //   {
  //     id: 15,
  //     name: "farmer15",
  //     email: "farmer15@gmail.com",
  //     time: "5/1/23",
  //     certificate: null,
  //     code: 1234,
  //     document1: "Document of Land Ownership",
  //     document2: "Utility Bill",
  //   },
  // ];

  const [revealButtons, setRevealButtons] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState<UserImpl | null>(null);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedFarmers = users.slice(startIndex, endIndex);
  const [error, setError] = useState<String | null>(null);
  // access token for adimn
  const [token, setToken] = useState<String | null>(null);

  /* ---uncomment useEffect when api endpoint is added--- */

  // useEffect(() => {
  //   const getFarmers = async () => {
  //     try {
  //       const response = await fetch(/* api endpoint here */);
  //       const data: Farmer[] = await response.json();
  //       setPendingFarmers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getPendingFarmers();
  // }, []);

  // get access token for admin
  const fetchToken = async () => {
    try {
      const response = await fetch(
        "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/auth/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "admin",
            password: "admin123",
          }),
        }
      );

      const data: Token = await response.json();
      if (response.ok) {
        //console.log(data.access);
        setToken(data.access);
        //console.log(token);
      } else {
        setError(data.detail || "Failed to fetch token.");
      }
    } catch (error) {
      setError("An error occurred while fetching token.");
    }
  };

  // fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setUsers(data.results);
      } else {
        setError(data.detail || "Failed to fetch users.");
      }
    } catch (error) {
      setError("An error occurred while fetching users.");
    }
  };

  const approveFarmer = async (farmer: UserImpl) => {
    try {
      // api endpoint here//
      // functionality for approval email here //
      const path: string = farmer.url;
      const response = await fetch(`${path}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // ... Add Authorization headers here
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          is_active: true,
        }),
      });

      if (response.status === 200) {
        console.log("Operation successful!");
      } else {
        console.log("Operation failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const rejectFarmer = async (farmer: UserImpl) => {
    try {
      // api enpoint here//
      // functionality for rejection email here//
      const path: string = farmer.url;
      const response = await fetch(`${path}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // ... Add Authorization headers here
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          is_active: false,
        }),
      });

      if (response.status === 200) {
        console.log("Operation successful!");
      } else {
        console.log("Operation failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleButtons = (farmer: UserImpl) => {
    setSelectedFarmer(farmer);
    setRevealButtons(!revealButtons);
  };

  useEffect(() => {
    fetchToken();

    //fetchUsers();
  }, []);

  useEffect(() => {
    //console.log(token);
    fetchUsers();
  }, [token]);

  return (
    <div className="table">
      <div className="m-5">
        <div className="title-row">
          <p className="ms-1 w-5/12">Name</p>
          <p className="w-5/12">Email</p>
          <p className="w-2/12">Time</p>
        </div>
        <div>
          {displayedFarmers.map((farmer: UserImpl) => (
            <div key={farmer.id} className="data-row">
              <div className="flex flex-row">
                <p className="ms-2 w-5/12">{farmer.username}</p>
                <p className="w-5/12">{farmer.email}</p>
                {/* <p className="w-1/12">{farmer.time}</p> */}
                <button
                  className="arrow-button"
                  onClick={() => handleButtons(farmer)}
                >
                  <ChevronDownOutline />
                </button>
              </div>
              {revealButtons &&
                selectedFarmer &&
                selectedFarmer.email === farmer.email && (
                  <div className="button-container">
                    <button
                      className="approve-button"
                      onClick={() => approveFarmer(farmer)}
                    >
                      <div className="flex items-center">
                        <CheckmarkCircleOutline />
                        <p className="ms-2 text-sm">Approve</p>
                      </div>
                    </button>
                    <button
                      className="reject-button"
                      onClick={() => rejectFarmer(farmer)}
                    >
                      <div className="flex items-center">
                        <CloseCircleOutline />
                        <p className="ms-2 text-sm">Reject</p>
                      </div>
                    </button>
                  </div>
                )}
            </div>
          ))}
        </div>
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={">"}
          previousLabel={"<"}
          pageCount={Math.ceil(users.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination-container"}
          activeClassName={"pagination-active"}
          pageClassName={"pagination-page"}
          pageLinkClassName={"page-link"}
          previousClassName={"pagination-arrow"}
          nextClassName={"pagination-arrow"}
        />
      </div>
    </div>
  );
};

export default NewFarmersTable;

// http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/10/

// http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/users/10/
