import React from 'react';
import DashboardLayout from "./layout";
import DocumentUploadForm from '../../../component/dashboard/MarketPlaceProfile/MyDocumentForm'

interface MyDocumentFormProps {
  title: string;
}


const MyDocumentForm: React.FC<MyDocumentFormProps> = ({ title }) => {
  return (
    <DashboardLayout title="Document Information" >
       <DocumentUploadForm />
      </DashboardLayout>
  )
}
export default MyDocumentForm;


