import React, { useState } from "react"
import styles from "@/styles/ActivePurchaseOrderReceiptsTable.module.css"
import "tailwindcss/tailwind.css"
import {
  DocumentOutline,
  ReceiptOutline,
  FileTrayFullOutline,
} from "react-ionicons"
import Link from "next/link"
import Button from "@/comps/Button/button"

// import flag from "@cs/public/Flag_of_Nigeria.png"

interface receipt {
  id: number
  type: number
  date: string
  status: string
}

interface PurchaseOrder {
  id: number
  farm: string
  farmer: string
  farmerImage: string
  type: string
  orderDate: string
  deliveryDate: string
  address: string
  price: number
  receipts: receipt[]
}

interface PurchaseOrderReceiptsTableProps {
  purchaseOrder: PurchaseOrder
}

const PurchaseOrderReceiptsTable: React.FC<PurchaseOrderReceiptsTableProps> = ({
  purchaseOrder,
}) => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <div className={styles.dropdownRow}>
        <div className={styles.dropdown}>
          <button onClick={toggleVisible} className={styles.ellipsisButton}>
            ...
          </button>
          {visible && (
            <div className={styles.menu}>
              <button className={styles.menuItem}>
                <div className={styles.menuItemContent}>
                  <DocumentOutline
                    height="15px"
                    width="15px"
                    color={"#3c7174"}
                  />
                  <span className="ms-2"> Send Invoice </span>
                </div>
              </button>
              <button className={styles.menuItem}>
                <div className={styles.menuItemContent}>
                  <ReceiptOutline
                    height="15px"
                    width="15px"
                    color={"#3c7174"}
                  />
                  <span className="ms-2"> Send Receipt </span>
                </div>
              </button>
              <button className={styles.menuItem}>
                <div className={styles.menuItemContent}>
                  <FileTrayFullOutline
                    height="15px"
                    width="15px"
                    color={"#3c7174"}
                  />
                  <span className="ms-2"> Send Waybill </span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Invoices/waybills/receipts</h2>
      </div>
      <table className={`${styles.table} table-auto`}>
        <thead>
          <tr>
            <th className={`${styles.th} w-2/4`}>Type</th>
            <th className={`${styles.th} w-1/4`}>Date</th>
            <th className={`${styles.th} w 1/4`}>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrder.receipts.map((receipt) => (
            <tr key={receipt.id}>
              <td className={styles.td}>{receipt.type}</td>
              <td className={styles.td}>{receipt.date}</td>
              <td className={styles.td}>
                {receipt.status === "Sent" ? (
                  <p className={styles.statusSent}>Sent</p>
                ) : receipt.status === "Pending" ? (
                  <p className={styles.statusPending}>Pending</p>
                ) : (
                  <p className={styles.statusReceived}>Received</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PurchaseOrderReceiptsTable
