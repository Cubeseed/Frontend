import React from 'react';
import IdDashboardLayout from './layout';
import MyAccountFormEdit from '../../../../component/dashboard/MarketPlaceProfile/MyAccountFormEdit';

interface MyAccountProps {
  title: string;
  // userId: string;
  // sidebarOpen: boolean;
}

const MyAccount: React.FC<MyAccountProps> = ({ title }) => {
  return (
    <IdDashboardLayout title="Personal Information" > 
  <MyAccountFormEdit  />
</IdDashboardLayout>
  );
};

export default MyAccount;
