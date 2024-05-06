import React from "react"

const TinyFooter: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between py-12">
        <div className="flex flex-row">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>&copy;2023 Cubeseed</p>
        </div>
      </div>
    </>
  )
}

export default TinyFooter
