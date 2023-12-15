import "@/styles/moderatorsidebar.css"
import Image from "next/image"
import cubeseedLogo from "@/assets/icons/logo1.png"
import supportIcon from "@/assets/icons/Contact support.png"
import folderIcon from "@/assets/icons/folder_shared.png"
import usersIcon from "@/assets/icons/group.png"
import textIcon from "@/assets/icons/text_snippet.png"
import Link from "next/link"
import { useRouter } from "next/router"

const SideBar = () => {
    const router = useRouter()
    const currentRoute = router.pathname

    return(
      <div className="sidenav" >
      <div>
          <Image 
          src={cubeseedLogo}
          alt="icon"
          />      
      </div>
      {/* insert user name from api here in the place of Admin */}
      <h1>Hello Admin</h1>
      <ul className="sidenav-nav">
          <li className="sidenav-nav-item">
              <Link href={"/moderator/users"} className={currentRoute == "/moderator/users" ? "active":"sidenav-nav-link"}>
              <div className='sidenav-link-icon'>
              <Image 
          src={usersIcon}
          alt="icon"
          /> 
              </div>
                  <span className="sidenav-link-text" >Users</span>      
              </Link>            
          </li>
          <li className="sidenav-nav-item">
              <Link href={"/moderator/farmer_documents"} className={currentRoute == "/moderator/farmer_documents" ? "active":"sidenav-nav-link"}>
                  <div className='sidenav-link-icon'>
                  <Image 
          src={folderIcon}
          alt="icon"
          /> 
                  </div>
                  <span className="sidenav-link-text" >Farmers documents</span>      
              </Link>            
          </li>
          <li className="sidenav-nav-item">
          <Link href={"/moderator/certificates"} className={currentRoute == "/moderator/certificates" ? "active":"sidenav-nav-link"}>
                  <div className='sidenav-link-icon'>
                  <Image 
          src={textIcon}
          alt="icon"
          /> 
                  </div>
                  <span className="sidenav-link-text" >Certificates/Codes</span>      
          </Link>             
         </li>

         <div className="support">
          <li>
          <Link href={""} className="sidenav-nav-link">
                  <div className='sidenav-link-icon'>
                  <Image 
          src={supportIcon}
          alt="icon"
          /> 
                  </div>
                  <span className="sidenav-link-text" >support</span>      
          </Link>            
         </li>
         </div>
     </ul>
  </div>
)
}
export default SideBar
