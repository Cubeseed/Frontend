import React from "react"
import DashboardLayout from "./layout"
import BusinessDetailForm from "../../../component/dashboard/MarketPlaceProfile/MyBusinessForm"

interface MyBusinessFormProps {
  sidebarOpen: boolean
}

const MyBusinessForm: React.FC<MyBusinessFormProps> = ({ sidebarOpen }) => {
  return (
    <DashboardLayout title="Business Information">
      <BusinessDetailForm sidebarOpen={sidebarOpen} />
    </DashboardLayout>
  )
}

export default MyBusinessForm
