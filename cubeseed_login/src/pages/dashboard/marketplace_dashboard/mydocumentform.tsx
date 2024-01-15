import React from "react"
import DashboardLayout from "./layout"
import DocumentUploadForm from "../../../component/dashboard/MarketPlaceProfile/MyDocumentForm"

const MyDocumentForm: React.FC = () => {
  return (
    <DashboardLayout title="Document Information">
      <DocumentUploadForm />
    </DashboardLayout>
  )
}
export default MyDocumentForm