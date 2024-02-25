import React from "react"
import ProfileLayout from "./profile_layout"
import BusinessDetailForm from "@/component/dashboard/MarketPlaceProfile/MyBusinessForm"

const MyBusinessForm: React.FC = () => {
  return (
    <ProfileLayout title="Business Information" sideBarOpenContainer={true}>
      <BusinessDetailForm />
    </ProfileLayout>
  )
}

export default MyBusinessForm
