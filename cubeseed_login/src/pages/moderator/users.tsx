import SideBar from "../../component/moderator_sidebar/sidebar"
// import SearchBar from '../../component/moderator_searchbar/searchbar'
// import Filter from '../../component/moderator_filter/filter'
import NewFarmersTable from "@/component/tables/NewFarmersTable"

export default function Users() {
  return (
    <main className="flex items-center">
      <SideBar />
      <NewFarmersTable />
      {/* <SearchBar></SearchBar>
          <Filter></Filter> */}
    </main>
  )
}
