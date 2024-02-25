"use client"
import React from "react"
import ProfileLayout from "./profile_layout"
import DocumentUploadForm from "@/component/dashboard/MarketPlaceProfile/MyDocumentForm"

const MyDocumentForm: React.FC = () => {
  return (
    <ProfileLayout title="Document Information" sideBarOpenContainer={true}>
      <DocumentUploadForm />
    </ProfileLayout>
  )
}
export default MyDocumentForm
