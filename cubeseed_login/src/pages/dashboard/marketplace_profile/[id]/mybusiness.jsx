import React from 'react';
import IdDashboardLayout from './layout';
import MyBusinessFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyBusinessFormEdit';


const MyBusiness = ({ title, sidebarOpen }) => {
  return (
  <IdDashboardLayout title="Business Information">
       <MyBusinessFormEdit sidebarOpen={sidebarOpen} />
       </IdDashboardLayout>
  )
}

export default MyBusiness;