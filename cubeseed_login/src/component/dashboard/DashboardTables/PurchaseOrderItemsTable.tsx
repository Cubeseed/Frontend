import React from "react"
import styles from "@/styles/PurchaseOrderItemsTable.module.css"
import "tailwindcss/tailwind.css"
import Link from "next/link"
// import flag from "@cs/public/Flag_of_Nigeria.png"

interface Item {
  id: number
  name: string
  quantity: number
  price: number
  specifications: string
  image: string
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
  items: Item[]
}

interface PurchaseOrderItemsTableProps {
  purchaseOrder: PurchaseOrder
}

const PurchaseOrderItemsTable: React.FC<PurchaseOrderItemsTableProps> = ({
  purchaseOrder,
}) => {
  return (
    <div>
      <table className={`${styles.table} table-auto`}>
        <thead>
          <tr>
            <th className={styles.th}>Product Description</th>
            <th className={styles.th}>QTY</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Specifications</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrder.items.map((item) => (
            <tr key={item.id}>
              <td className={styles.td}>
                <img
                  className="mr-3 inline-block h-10 w-10 rounded-full"
                  src={item.image}
                  alt=""
                />
                <p className="inline-block">{item.name}</p>
              </td>
              <td className={`${styles.td} text-center`}>{item.quantity}</td>
              <td className={`${styles.td} text-center`}>
                &#8358; {item.price * item.quantity}
              </td>
              <td className={`${styles.td} text-center`}>
                {item.specifications}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PurchaseOrderItemsTable
