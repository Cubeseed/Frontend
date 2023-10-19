import React from 'react';
import DashboardLayout from "./layout";
import PersonalDetailForm from '../../../component/dashboard/MarketPlaceProfile/MyAccountForm'
import MyAccountTitle from '../../../component/dashboard/MarketPlaceProfile/MyAccountTitle'


const MyAccountForm = ({ title }) => {
  return (
    <DashboardLayout title="Personal Information">
    <PersonalDetailForm />
     </DashboardLayout>
  )
}
export default MyAccountForm;