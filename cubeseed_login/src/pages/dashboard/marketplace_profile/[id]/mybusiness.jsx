import React from 'react';
import DashboardLayout from "../layout"
import MyBusinessFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyBusinessFormEdit';


const MyBusiness = ({ title, sidebarOpen }) => {
  return (
  <DashboardLayout title="Business Information">
       <MyBusinessFormEdit sidebarOpen={sidebarOpen} />
       </DashboardLayout>
  )
}

export default MyBusiness;