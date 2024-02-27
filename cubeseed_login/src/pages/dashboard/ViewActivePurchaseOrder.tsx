import ActivePurchaseOrderItemsTable from "@/component/dashboard/DashboardTables/ActivePurchaseOrderItemsTable"
import ActivePurchaseOrderReceiptsTable from "@/component/dashboard/DashboardTables/ActivePurchaseOrderReceiptsTable"
import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel"
import styles from "@/styles/ViewActivePurchaseOrder.module.css"
import React, { useState } from "react"
import Link from "next/link"
import { ArrowBackOutline } from "react-ionicons"
import ProfileCard from "@/component/dashboard/DashboardCards/ProfileCard"

const ViewActivePurchaseOrder = () => {
  const [acceptTerms, setAcceptTerms] = useState(false)

  interface item {
    id: number
    name: string
    quantity: number
    price: number
    specifications: string
    image: string
  }

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
    items: item[]
    receipts: receipt[]
  }

  const purchaseOrder: PurchaseOrder = {
    id: 121212,
    farm: "Farm1",
    farmer: "Farmer1",
    farmerImage: "https://picsum.photos/200",
    type: "crop",
    orderDate: "1/1/23",
    deliveryDate: "5/1/23",
    address: "No 1, Lagos Street, Lagos State, Nigeria",
    price: 23000,
    items: [
      {
        id: 1,
        name: "Coacoa",
        quantity: 1,
        price: 500,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Cassava",
        quantity: 10,
        price: 1000,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 3,
        name: "Potato",
        quantity: 5,
        price: 300,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 4,
        name: "Yam",
        quantity: 10,
        price: 200,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 5,
        name: "Beans",
        quantity: 10,
        price: 100,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 6,
        name: "Coacoa",
        quantity: 1,
        price: 500,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 7,
        name: "Cassava",
        quantity: 10,
        price: 1000,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 8,
        name: "Potato",
        quantity: 5,
        price: 300,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 9,
        name: "Yam",
        quantity: 10,
        price: 200,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
      {
        id: 10,
        name: "Beans",
        quantity: 10,
        price: 100,
        specifications: "Lorem ipsum",
        image: "https://picsum.photos/200",
      },
    ],
    receipts: [
      {
        id: 1,
        type: 12301,
        date: "1/1/23",
        status: "Sent",
      },
      {
        id: 2,
        type: 12302,
        date: "1/1/23",
        status: "Received",
      },
      {
        id: 3,
        type: 12303,
        date: "1/1/23",
        status: "Pending",
      },
      {
        id: 4,
        type: 12304,
        date: "1/1/23",
        status: "Pending",
      },
      {
        id: 5,
        type: 12305,
        date: "1/1/23",
        status: "Received",
      },
      {
        id: 6,
        type: 12306,
        date: "1/1/23",
        status: "Sent",
      },
      {
        id: 7,
        type: 12307,
        date: "1/1/23",
        status: "Received",
      },
      {
        id: 8,
        type: 12308,
        date: "1/1/23",
        status: "Sent",
      },
      {
        id: 9,
        type: 12309,
        date: "1/1/23",
        status: "Pending",
      },
      {
        id: 10,
        type: 12310,
        date: "1/1/23",
        status: "Received",
      },
    ],
  } //sample data //

  return (
    <div className="flex">
      <DashboardSidePannel />
      <div className="flex-1 flex-col">
        <div className="ml-5 flex items-center">
          <ArrowBackOutline color={"#00000"} height="30px" width="30px" />
          <Link href={""} className="ml-1 text-sm">
            Back
          </Link>
        </div>
        <div>
          <p className="my-5 ml-5 text-3xl">
            Purchase Order #{purchaseOrder.id}
          </p>
        </div>
        <div className="flex">
          <div className="w-3/5">
            <div className={styles.itemsTableContainer}>
              <div className={styles.scrollContent}>
                <ActivePurchaseOrderItemsTable purchaseOrder={purchaseOrder} />
              </div>
            </div>
            <div className={styles.receiptsTableContainer}>
              <div className={styles.scrollContent}>
                <ActivePurchaseOrderReceiptsTable
                  purchaseOrder={purchaseOrder}
                />
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewActivePurchaseOrder
