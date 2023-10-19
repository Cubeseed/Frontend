import React from 'react';
import DashboardLayout from '../layout';
import MyAccountFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyAccountFormEdit';


const MyAccount = ({ title, sidebarOpen }) => {
  return (
    <DashboardLayout title="Personal Information">
       <MyAccountFormEdit sidebarOpen={sidebarOpen} />
       </DashboardLayout>
  )
}

export default MyAccount;