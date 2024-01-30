import React from "react"
import "@/styles/AcceptedUsersCard.css"
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
  status: string
  certificate: string | null
  code: number | null
  document1: string | null
  document2: string | null
}

interface AcceptedUsersCardProps {
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
  status: "approved",
  document1: "Utility Bill",
  document2: "Picture of Farm",
}

const AcceptedUsersCard: React.FC<AcceptedUsersCardProps> = ({ farmer }) => {
  const router = useRouter()

  return (
    <div>
      <SideBar></SideBar>
      <div className="container">
        <p className="nav-info">
          Accepted Users {">"} Farmer {router.query.card}
        </p>
        <div className="card">
          <div className="titles-column">
            <p className="title">Status : </p>
            <p className="title">Full Name :</p>
            <p className="title">Email :</p>
            <p className="title">Document Type 1 :</p>
            <p className="title">Document Type 2 :</p>
          </div>
          <div className="data-column">
            <p className="data">{sampleFarmer.status}</p>
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
      </div>
    </div>
  )
}

export default AcceptedUsersCard
