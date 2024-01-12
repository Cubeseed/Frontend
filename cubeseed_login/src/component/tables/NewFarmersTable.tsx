import React, { useState, useEffect } from "react"
import "@/styles/NewFarmersTable.css"
import "tailwindcss/tailwind.css"
import ReactPaginate from "react-paginate"
import {
  ChevronDownOutline,
  CheckmarkCircleOutline,
  CloseCircleOutline,
} from "react-ionicons"
import Filter from "../moderator_filter/filter"
import SearchBar from "../moderator_searchbar/searchbar"
import Link from "next/link"

interface Farmer {
  id: number
  name: string
  email: string
  time: string
  certificate: string | null
  code: number | null
  document1: string | null
  document2: string | null
}

interface NewFarmersTableProps {}

const NewFarmersTable: React.FC<NewFarmersTableProps> = () => {
  //sample data for testing -- replace with 'pendingFarmers' variable//
  const sampleFarmers = [
    {
      id: 1,
      name: "farmer1",
      email: "farmer1@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Utility Bill",
      document2: "Picture of Farm",
    },
    {
      id: 2,
      name: "farmer2",
      email: "farmer2@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Picture of Farm",
      document2: "Document of Land Ownership",
    },
    {
      id: 3,
      name: "farmer3",
      email: "farmer3@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Document of Land Ownership",
      document2: "Utility Bill",
    },
    {
      id: 4,
      name: "farmer4",
      email: "farmer4@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Utility Bill",
      document2: "Picture of Farm",
    },
    {
      id: 5,
      name: "farmer5",
      email: "farmer5@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Picture of Farm",
      document2: "Document of Land Ownership",
    },
    {
      id: 6,
      name: "farmer6",
      email: "farmer6@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Document of Land Ownership",
      document2: "Utility Bill",
    },
    {
      id: 7,
      name: "farmer7",
      email: "farmer7@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Utility Bill",
      document2: "Picture of Farm",
    },
    {
      id: 8,
      name: "farmer8",
      email: "farmer8@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Picture of Farm",
      document2: "Document of Land Ownership",
    },
    {
      id: 9,
      name: "farmer9",
      email: "farmer9@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Document of Land Ownership",
      document2: "Utility Bill",
    },
    {
      id: 10,
      name: "farmer10",
      email: "farmer10@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Utility Bill",
      document2: "Picture of Farm",
    },
    {
      id: 11,
      name: "farmer11",
      email: "farmer11@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Picture of Farm",
      document2: "Document of Land Ownership",
    },
    {
      id: 12,
      name: "farmer12",
      email: "farmer12@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Document of Land Ownership",
      document2: "Utility Bill",
    },
    {
      id: 13,
      name: "farmer13",
      email: "farmer13@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Utility Bill",
      document2: "Picture of Farm",
    },
    {
      id: 14,
      name: "farmer14",
      email: "farmer14@gmail.com",
      time: "5/1/23",
      certificate: "document.pdf",
      code: null,
      document1: "Picture of Farm",
      document2: "Document of Land Ownership",
    },
    {
      id: 15,
      name: "farmer15",
      email: "farmer15@gmail.com",
      time: "5/1/23",
      certificate: null,
      code: 1234,
      document1: "Document of Land Ownership",
      document2: "Utility Bill",
    },
  ]

  const [revealButtons, setRevealButtons] = useState(false)
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null)
  const [pendingFarmers, setPendingFarmers] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedFarmers = sampleFarmers.slice(startIndex, endIndex)

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

  const approveFarmer = async (farmer: Farmer) => {
    try {
      // api endpoint here//
      // functionality for approval email here //
    } catch (error) {
      console.log(error)
    }
  }

  const rejectFarmer = async (farmer: Farmer) => {
    try {
      // api enpoint here//
      // functionality for rejection email here//
    } catch (error) {
      console.log(error)
    }
  }

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const handleButtons = (farmer: Farmer) => {
    setSelectedFarmer(farmer)
    setRevealButtons(!revealButtons)
  }

  return (
    <div className="holder">
      <p className="new-sign-up-title">New Sign Ups</p>
      <Link href={"accepted_users/users"}>
        <button className="allusers-button">All Users</button>
      </Link>
      <div className="flex items-center">
        <SearchBar />
        <Filter />
      </div>
      <div className="table">
        <div className="m-5">
          <div className="title-row">
            <p className="ms-1 w-5/12">Name</p>
            <p className="w-5/12">Email</p>
            <p className="w-2/12">Time</p>
          </div>
          <div>
            {displayedFarmers.map((farmer) => (
              <div key={farmer.id} className="data-row">
                <div className="flex flex-row">
                  <p className="ms-2 w-5/12">{farmer.name}</p>
                  <p className="w-5/12">{farmer.email}</p>
                  <p className="w-1/12">{farmer.time}</p>
                  <button
                    className="arrow-button"
                    onClick={() => handleButtons(farmer)}
                  >
                    <ChevronDownOutline />
                  </button>
                </div>
                {revealButtons &&
                  selectedFarmer &&
                  selectedFarmer.id === farmer.id && (
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
            pageCount={Math.ceil(sampleFarmers.length / itemsPerPage)}
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
    </div>
  )
}

export default NewFarmersTable
