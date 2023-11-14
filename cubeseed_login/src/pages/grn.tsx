import React, { useContext } from "react"

import Button from "@/comps/Button/button"
import { FarmContext } from "@/context/context"
import ActivateModal from "./../comps/modal/modal"

export default function Grn() {
  const { open, handleShowModal } = useContext(FarmContext)

  return (
    <>
      {open ? <ActivateModal /> : ""}
      <Button className="" onClick={handleShowModal}>
        <span
          style={{
            backgroundColor: "#ddbe8e",
            color: "#ffff",
          }}
        >
          create-grn
        </span>
      </Button>
    </>
  )
}
