import React from "react"
import DashboardLayout from "./layout"
import BusinessDetailForm from "../../../component/dashboard/MarketPlaceProfile/MyBusinessForm"

const MyBusinessForm: React.FC = () => {
  return (
    <DashboardLayout title="Business Information" sideBarOpenContainer={true}>
      <BusinessDetailForm />
    </DashboardLayout>
  )
}

export default MyBusinessForm
