import React, { useState, useEffect } from "react"
import "@/styles/FarmerDocsTable.css"
import "tailwindcss/tailwind.css"
import ReactPaginate from "react-paginate"
import Link from "next/link"

interface FarmerDocsTableProps {}

const FarmerDocsTable: React.FC<FarmerDocsTableProps> = () => {
  //sample data for testing -- replace with 'farmers' variable//
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

  const [farmers, setFarmers] = useState([])
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
  //       setFarmers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getFarmers();
  // }, [farmers]);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  return (
    <div className="table">
      <div className="m-5">
        <div className="title-row">
          <p className="ms-1 w-1/3">Full Name</p>
          <p className="w-1/3">Document Type 1</p>
          <p className="w-1/3">Document type 2</p>
        </div>
        <div>
          {displayedFarmers.map((farmer) => (
            <Link key={farmer.id} href={`/moderator/docs_card`}>
              {/* adjust as needed ^^^^ */}
              <div className="data-row">
                <div className="flex flex-row">
                  <p className="ms-2 w-1/3">{farmer.name}</p>
                  <p className="w-1/3">{farmer.document1}</p>
                  <p className="w-1/3">{farmer.document2}</p>
                </div>
              </div>
            </Link>
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
  )
}

export default FarmerDocsTable
