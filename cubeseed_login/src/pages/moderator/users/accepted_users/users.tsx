import SideBar from "../../../../component/moderator_sidebar/sidebar"
import AcceptedUsersTable from "@/component/tables/AcceptedUsersTable"

export default function Users() {
  return (
    <main>
      <SideBar />
      <div style={{ ["margin" as any]: "50px 0px 0px 450px" }}>
        <AcceptedUsersTable />
      </div>
    </main>
  )
}
