import React from "react"
import styles from "@/styles/ActivePurchaseOrderItemsTable.module.css"

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

interface ActivePurchaseOrderItemsTableProps {
  purchaseOrder: PurchaseOrder
}

const ActivePurchaseOrderItemsTable: React.FC<
  ActivePurchaseOrderItemsTableProps
> = ({ purchaseOrder }) => {
  return (
    <div>
      <div className={styles.headingRow}>
        <h2 className={styles.heading}>Items</h2>
      </div>
      <table className={`${styles.table} table-auto`}>
        <thead>
          <tr>
            <th className={`${styles.th} w-2/5`}>Description</th>
            <th className={`${styles.th} w-1/5`}>QTY</th>
            <th className={`${styles.th} w-1/5`}>Price</th>
            <th className={`${styles.th} w-1/5`}>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrder.items.map((item) => (
            <tr key={item.id}>
              <td className={`${styles.td} w-2/5`}>
                <p>{item.name}</p>
              </td>
              <td className={`${styles.td} w-1/5`}>{item.quantity}</td>
              <td className={`${styles.td} w-1/5`}>&#8358; {item.price}</td>
              <td className={`${styles.td} w-1/5`}>
                &#8358; {item.price * item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ActivePurchaseOrderItemsTable
