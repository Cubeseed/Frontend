import React from 'react';
import IdDashboardLayout from './layout';
import MyAccountFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyAccountFormEdit';


const MyAccount = ({ title, sidebarOpen }) => {
  return (
    <IdDashboardLayout title="Personal Information">
       <MyAccountFormEdit sidebarOpen={sidebarOpen} />
       </IdDashboardLayout>
  )
}

export default MyAccount;