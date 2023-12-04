import React, { useContext } from "react"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import GoodsRecievedNote from "../FarmGrn/goodsrecievenotice"
import { FarmContext } from "@/context/context"
import CongratulationSms from "./../congratsms/index"

type ModalProps = {
  show: boolean
  onClose: () => void
}
export default function ActivateModal() {
  const { show, handleCloseModal, congrate } = useContext(FarmContext)

  return (
    <Modal open={show} onClose={handleCloseModal}>
      {congrate ? <CongratulationSms /> : <GoodsRecievedNote />}
    </Modal>
  )
}
