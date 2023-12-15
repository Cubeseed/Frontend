import CertificatesTable from "@/component/tables/CertificateTable"
import "../../component/moderator_sidebar/sidebar"
import SideBar from "../../component/moderator_sidebar/sidebar"

export default function Certificates() {
  return (
    <div className="flex items-center">
      <SideBar />
      <CertificatesTable />
    </div>
  )
}
