import SideBar from "../../../component/moderator_sidebar/sidebar"
import NewFarmersTable from "@/component/tables/NewFarmersTable"

export default function NewUsers() {
  return (
    <main>
      <SideBar />
      <div style={{ ["margin" as any]: "50px 0px 0px 450px" }}>
        <NewFarmersTable />
      </div>
    </main>
  )
}
