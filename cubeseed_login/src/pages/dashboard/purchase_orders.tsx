import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel"
import PurchaseOrdersTable from "@/component/dashboard/DashboardTables/PurchaseOrdersTable"
import React from "react"
import styles from "@/styles/purchase_orders.module.css"
import SearchBar from "@/component/dashboard/SearchBar/SearchBar"

const purchase_orders = () => {
  return (
    <div className="flex">
      <DashboardSidePannel />
      <div className="flex flex-col">
        <h1 className={styles.title}>Available Purchase Orders</h1>
        <p className={styles.subtitle}>Orders</p>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <PurchaseOrdersTable />
      </div>
    </div>
  )
}

export default purchase_orders
