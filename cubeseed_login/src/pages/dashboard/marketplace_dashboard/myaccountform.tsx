import React from 'react';
import DashboardLayout from './layout';
import PersonalDetailForm from '../../../component/dashboard/MarketPlaceProfile/MyAccountForm';

interface MyAccountFormProps {
  title: string;
  sidebarOpen: boolean;
  uploading: boolean;
  selectedImage: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyAccountForm: React.FC<MyAccountFormProps> = ({ title, uploading, selectedImage, handleFileChange }) => {
  return (
    <DashboardLayout title="Personal Information">
      <PersonalDetailForm uploading={uploading} selectedImage={selectedImage} handleFileChange={handleFileChange} />
    </DashboardLayout>
  );
};

export default MyAccountForm;
