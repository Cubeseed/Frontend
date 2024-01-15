import React from "react"
import IdDashboardLayout from "./layout"
import MyDocumentFormEdit from "../../../../component/dashboard/MarketPlaceProfile/MyDocumentFormEdit"

interface MyDocumentProps {
  title: string
  userId: string
  // sidebarOpen: boolean;
}

const MyDocument: React.FC<MyDocumentProps> = ({ title, userId }) => {
  return (
    <IdDashboardLayout title="Document Information">
      <MyDocumentFormEdit userId={userId} />
    </IdDashboardLayout>
  )
}

export default MyDocument
