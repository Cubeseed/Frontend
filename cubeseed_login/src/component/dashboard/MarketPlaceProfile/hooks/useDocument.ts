import { useState, useEffect, ChangeEvent } from "react"

interface DocumentInfo {
  business_tax_id: string
  EIN: string
  SSN: string
  uploadEIN: string
  uploadSSN: string
}

interface DocumentErrors {
  business_tax_id: string
  EIN: string
  SSN: string
  uploadEIN: string
  uploadSSN: string
}

interface DocumentHook {
  docInfo: DocumentInfo
  errors: DocumentErrors
  selectedDocImage: string
  docImgError: string
  setDocImgError: React.Dispatch<React.SetStateAction<string>>
  handleDocumentUpload: (e: ChangeEvent<HTMLInputElement>) => void
  handleDocumentSubmit: (e: React.FormEvent) => Promise<void>
}

const useDocument = (): DocumentHook => {
  const [docInfo, setDocInfo] = useState<DocumentInfo>({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: "",
  })

  const [errors, setErrors] = useState<DocumentErrors>({
    business_tax_id: "",
    EIN: "",
    SSN: "",
    uploadEIN: "",
    uploadSSN: "",
  })

  const [selectedDocImage, setSelectedDocImage] = useState("")
  const [selectedDocFile, setSelectedDocFile] = useState<File | null>(null)
  const [docImgError, setDocImgError] = useState<string>("")

  const handleDocumentUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target

    if (name === "uploadEIN" || name === "uploadSSN") {
      const allowedFileTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]

      if (files && files.length > 0) {
        const file = files[0]

        if (!allowedFileTypes.includes(file.type)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]:
              "Invalid file type. Please upload a PDF, DOC, or DOCX file.",
          }))
        } else if (file.size > 2097152) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]:
              "File size too large. Please upload a file that is less than 2 MB.",
          }))
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
          setSelectedDocFile(file)
        }
      }
    } else {
      setDocInfo((prev) => ({ ...prev, [name]: e.target.value }))
    }
  }

  const handleDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (Object.values(errors).some((error) => error !== "")) {
      console.error(
        "Document form has validation errors. Please fix them before submitting."
      )
      return
    }
    if (Object.values(docImgError).some((error) => error !== "")) {
      console.error(
        "Photo form has validation errors. Please fix them before submitting."
      )
      return
    }
    try {
      const documentResponse = await fetch(
        "https://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/businessprofile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(docInfo),
        }
      )

      if (!documentResponse.ok) {
        console.error("Failed to update user profile details")
        console.log(docInfo)
        return
      }

      const photoFormData = new FormData()
      photoFormData.append("myImage", selectedDocFile as Blob)
      const photoResponse = await fetch(
        "https://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/userprofilephoto",
        {
          method: "POST",
          body: photoFormData,
        }
      )

      if (!photoResponse.ok) {
        console.error("Failed to update profile picture")
        console.log(photoFormData)
        return
      }

      console.log("Form submitted successfully!")
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  useEffect(() => {
    console.log("Selected Document Photo:", selectedDocImage)
  }, [selectedDocImage])

  return {
    docInfo,
    errors,
    selectedDocImage,
    docImgError,
    setDocImgError,
    handleDocumentUpload,
    handleDocumentSubmit,
  }
}
export default useDocument
