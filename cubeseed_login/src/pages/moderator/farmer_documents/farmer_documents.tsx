import "../../../component/moderator_sidebar/sidebar"
import SideBar from "../../../component/moderator_sidebar/sidebar"
import FarmerDocsTable from "../../../component/tables/FarmerDocsTable"
import "tailwindcss/tailwind.css"

export default function FarmerDocuments() {
  return (
    <div>
      <SideBar />
      <div style={{ ["margin" as any]: "50px 0px 0px 450px" }}>
        <FarmerDocsTable />
      </div>
    </div>
  )
}
