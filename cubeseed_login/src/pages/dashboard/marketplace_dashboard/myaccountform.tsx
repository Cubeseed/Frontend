import React from "react"
import ProfileLayout from "./profile_layout"
import PersonalDetailForm from "../../../component/dashboard/MarketPlaceProfile/MyAccountForm"

const MyAccountForm: React.FC = () => {
  return (
    <ProfileLayout title="Personal Information" sideBarOpenContainer={true}>
      <PersonalDetailForm />
    </ProfileLayout>
  )
}

export default MyAccountForm
