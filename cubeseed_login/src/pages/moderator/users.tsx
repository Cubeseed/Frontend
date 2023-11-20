import SideBar from '../../component/moderator_sidebar/sidebar'
import SearchBar from '../../component/moderator_searchbar/searchbar'
import Filter from '../../component/moderator_filter/filter'
import './moderator.css'

export default function Users(){
    return(
        <main>
          <SideBar></SideBar>
          <SearchBar></SearchBar>
          <Filter></Filter>
        </main>
         
    )
}