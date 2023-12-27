import React from 'react';
import DashboardLayout from './layout';
import BusinessDetailForm from '../../../component/dashboard/MarketPlaceProfile/MyBusinessForm';

interface MyBusinessFormProps {
  title: string;
  sidebarOpen: boolean;
}

const MyBusinessForm: React.FC<MyBusinessFormProps> = ({ title, sidebarOpen }) => {
  return (
    <DashboardLayout title="Business Information">
      <BusinessDetailForm sidebarOpen={sidebarOpen} />
    </DashboardLayout>
  );
};

export default MyBusinessForm;
