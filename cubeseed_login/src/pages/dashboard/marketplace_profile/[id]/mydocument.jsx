import React from 'react';
import IdDashboardLayout from './layout';
import MyDocumentFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyDocumentFormEdit';


const MyDocument = ({ title, sidebarOpen}) => {
  return (
  <IdDashboardLayout title="Document Information">
  <MyDocumentFormEdit sidebarOpen={sidebarOpen} />
</IdDashboardLayout>
  )
}

export default MyDocument;