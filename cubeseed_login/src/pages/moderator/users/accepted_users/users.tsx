import SideBar from "../../../../component/moderator_sidebar/sidebar"
import AcceptedUsersTable from "@/component/tables/AcceptedUsersTable"

export default function Users() {
  return (
    <main className="flex items-center">
      <SideBar />
      <AcceptedUsersTable />
    </main>
  )
}
