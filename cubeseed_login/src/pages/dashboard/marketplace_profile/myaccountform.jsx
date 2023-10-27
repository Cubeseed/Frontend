import React from 'react';
import DashboardLayout from "./layout";
import PersonalDetailForm from '../../../component/dashboard/MarketPlaceProfile/MyAccountForm'


const MyAccountForm = ({ title }) => {
  return (
    <DashboardLayout title="Personal Information">
    <PersonalDetailForm />
     </DashboardLayout>
  )
}
export default MyAccountForm;