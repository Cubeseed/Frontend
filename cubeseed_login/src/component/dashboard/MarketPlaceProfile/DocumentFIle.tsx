// FileInput.tsx
import React, { ChangeEvent } from "react"
import styles from "@/styles/marketplaceprofile.module.css"

interface FileInputProps {
  id: string
  name: string
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: string
}

const FileInput: React.FC<FileInputProps> = ({
  id,
  name,
  label,
  onChange,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="file"
        accept=".pdf, .doc, .docx"
        onChange={onChange}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default FileInput
