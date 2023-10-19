import React from 'react';
import DashboardLayout from "../layout"
import MyAccountTitle from '../../../../component/dashboard/MarketPlaceProfile/MyAccountTitle';
import MyDocumentFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyDocumentFormEdit';


const MyDocument = ({ title, sidebarOpen}) => {
  return (
  <DashboardLayout title="Document Information">
       <MyDocumentFormEdit sidebarOpen={sidebarOpen} />
</DashboardLayout>
  )
}

export default MyDocument;