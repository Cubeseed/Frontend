import React from 'react';
import DashboardLayout from "./layout";
import BusinessDetailForm from '../../../component/dashboard/MarketPlaceProfile/MyBusinessForm'


const MyBusinessForm = ({ title, sidebarOpen }) => {
  return (
    <DashboardLayout title="Business Information">
       <BusinessDetailForm sidebarOpen={sidebarOpen} />
    </DashboardLayout>
  )
}
export default MyBusinessForm;