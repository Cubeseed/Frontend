import CertificatesTable from "@/component/tables/CertificateTable"
import "../../component/moderator_sidebar/sidebar"
import SideBar from "../../component/moderator_sidebar/sidebar"

export default function Certificates() {
  return (
    <div>
      <SideBar />
      <div style={{ ["margin" as any]: "50px 0px 0px 450px" }}>
        <CertificatesTable />
      </div>
    </div>
  )
}
