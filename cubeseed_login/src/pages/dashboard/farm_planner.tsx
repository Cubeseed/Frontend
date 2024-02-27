import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel"
import PurchaseOrdersTable from "@/component/dashboard/DashboardTables/PurchaseOrdersTable"
import React, { useState } from "react"
import styles from "@/styles/purchase_orders.module.css"
import SearchBar from "@/component/dashboard/SearchBar/SearchBar"

const FarmPlanner = () => {
  const [orders, setOrders] = useState([])
  const sampleOrders = [
    {
      id: 121212,
      farm: "Farm1",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121213,
      farm: "Farm2",
      type: "livestock",
      delivery: "7/7/23",
      price: "12,000",
    },
    {
      id: 121214,
      farm: "Farm3",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121215,
      farm: "Farm4",
      type: "livestock",
      delivery: "5/7/23",
      price: "12,000",
    },
    {
      id: 121216,
      farm: "Farm5",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121217,
      farm: "Farm6",
      type: "livestock",
      delivery: "5/12/23",
      price: "12,000",
    },
    {
      id: 121218,
      farm: "Farm7",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121219,
      farm: "Farm8",
      type: "livestock",
      delivery: "5/7/23",
      price: "12,000",
    },
    {
      id: 121220,
      farm: "Farm9",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121221,
      farm: "Farm10",
      type: "livestock",
      delivery: "5/7/23",
      price: "12,000",
    },
    {
      id: 121222,
      farm: "Farm11",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121223,
      farm: "Farm12",
      type: "livestock",
      delivery: "5/7/23",
      price: "12,000",
    },
    {
      id: 121224,
      farm: "Farm13",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
    {
      id: 121225,
      farm: "Farm14",
      type: "livestock",
      delivery: "5/7/23",
      price: "12,000",
    },
    {
      id: 121226,
      farm: "Farm15",
      type: "crop",
      delivery: "5/1/23",
      price: "23,000",
    },
  ] //sample data //

  /* ---uncomment useEffect when api endpoint is added--- */

  // useEffect(() => {
  //   const getActivePurchaseOrders = async () => {
  //     try {
  //       const response = await fetch(/* api endpoint here */);
  //       const data: Farmer[] = await response.json();
  //       setOrders(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getActivePurchaseOrders();
  // }, [orders]);

  const tableData = sampleOrders
  return (
    <div className="flex">
      <DashboardSidePannel />
      <div className="flex flex-col">
        <h1 className={styles.title}>Work On A Purchase Order</h1>
        <p className={styles.subtitle}>Active Orders</p>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <PurchaseOrdersTable tableData={tableData} />
      </div>
    </div>
  )
}

export default FarmPlanner
