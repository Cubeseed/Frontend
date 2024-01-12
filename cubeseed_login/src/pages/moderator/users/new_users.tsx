import SideBar from "../../../component/moderator_sidebar/sidebar"
import NewFarmersTable from "@/component/tables/NewFarmersTable"

export default function NewUsers() {
  return (
    <main className="flex items-center">
      <SideBar />
      <NewFarmersTable />
    </main>
  )
}
