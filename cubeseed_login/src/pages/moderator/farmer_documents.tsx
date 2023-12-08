import "../../component/moderator_sidebar/sidebar"
import SideBar from "../../component/moderator_sidebar/sidebar"
import FarmerDocsTable from "../../component/tables/FarmerDocsTable"
import "tailwindcss/tailwind.css"

export default function FarmerDocuments() {
  return (
    <div className="flex items-center">
      <SideBar></SideBar>
      <FarmerDocsTable />
    </div>
  )
}
