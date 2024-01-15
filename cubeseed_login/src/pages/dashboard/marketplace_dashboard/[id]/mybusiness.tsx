import React from "react"
import IdDashboardLayout from "./layout"
import MyBusinessFormEdit from "../../../../component/dashboard/MarketPlaceProfile/MyBusinessFormEdit"

interface MyBusinessProps {
  title: string
  // userId: string
  // sidebarOpen: boolean;
}

const MyBusiness: React.FC<MyBusinessProps> = ({ title }) => {
  return (
    <IdDashboardLayout title="Business Information">
      <MyBusinessFormEdit />
    </IdDashboardLayout>
  )
}

export default MyBusiness
