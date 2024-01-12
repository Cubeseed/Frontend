import React from "react"
import "@/styles/FarmerDocsCard.css"
import "tailwindcss/tailwind.css"
import {
  CheckmarkCircleOutline,
  CloseCircleOutline,
  FolderOutline,
} from "react-ionicons"
import SideBar from "@/component/moderator_sidebar/sidebar"
import { useRouter } from "next/router"

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

interface FarmerDocsCardProps {
  farmer: Farmer
}

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

//sample data for testing//
const sampleFarmer = {
  id: 1,
  name: "farmer1",
  email: "farmer1@gmail.com",
  time: "5/1/23",
  certificate: "document.pdf",
  code: null,
  document1: "Utility Bill",
  document2: "Picture of Farm",
}

const FarmerDocsCard: React.FC<FarmerDocsCardProps> = ({ farmer }) => {
  const router = useRouter()

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
      // api endpioint here //
      // functionality for rejection email here//
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="holder">
      <div className="flex items-center">
        <SideBar></SideBar>
        <div className="container">
          <p className="nav-info">
            Farmer documents {">"} Farmer {router.query.card}
          </p>
          <div className="card">
            <div className="titles-column">
              <p className="title">Full Name</p>
              <p className="title">Email</p>
              <p className="title">Document Type 1</p>
              <p className="title">Document Type 2</p>
            </div>
            <div className="data-column">
              <p className="data">{sampleFarmer.name}</p>
              <p className="data">{sampleFarmer.email}</p>
              <p className="data">
                {sampleFarmer.document1}
                <FolderOutline style={{ margin: "0 0 0 10px" }} />
              </p>
              <p className="data">
                {sampleFarmer.document2}
                <FolderOutline style={{ margin: "0 0 0 10px" }} />
              </p>
            </div>
          </div>
          <div>
            <div className="button-row">
              <button
                className="approve-button"
                onClick={() => approveFarmer(farmer)}
              >
                <div className="flex items-center">
                  <CheckmarkCircleOutline />
                  <p className="ms-2 text-lg">Approve</p>
                </div>
              </button>
              <button
                className="reject-button"
                onClick={() => rejectFarmer(farmer)}
              >
                <div className="flex items-center">
                  <CloseCircleOutline />
                  <p className="ms-2 text-lg">Reject</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmerDocsCard
