import PurchaseOrderItemsTable from "@/component/dashboard/DashboardTables/PurchaseOrderItemsTable"
import DashboardSidePannel from "@/component/dashboard/DashboardSidePannel"
import styles from "@/styles/viewPurchaseOrder.module.css"
import React, { useState } from "react"
import Link from "next/link"
import { ArrowBackOutline, ExpandOutline } from "react-ionicons"

const ViewPurchaseOrder = () => {
  const [acceptTerms, setAcceptTerms] = useState(false)

  interface item {
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
    items: item[]
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
  } //example data //

  return (
    <div className="flex">
      <DashboardSidePannel />
      <div>
        <div className="ml-5 flex items-center">
          <ArrowBackOutline color={"#00000"} height="30px" width="30px" />
          <Link href={""} className="ml-1 text-sm">
            Back
          </Link>
        </div>
        <div>
          <p className="mb-5 ml-5 mt-5 text-3xl">
            Purchase Order #{purchaseOrder.id}
          </p>
        </div>
        <div className="flex">
          <div className={`${styles.leftColumn} w-3/5`}>
            <p className="font-md ml-5 text-xl">
              PO Date: {purchaseOrder.orderDate}
            </p>
            <div className={styles.tableContainer}>
              <PurchaseOrderItemsTable purchaseOrder={purchaseOrder} />
            </div>
          </div>
          <div className={`${styles.rightColumn} w-2/5 pe-5`}>
            <div className="ms-5">
              <p className="font-md text-xl">
                Delivery Date: {purchaseOrder.deliveryDate}
              </p>
              <div>
                <div className="mt-5">
                  <p className={styles.venueAddress}>Venue of Delivery:</p>
                  <p className={styles.addressContainer}>
                    {purchaseOrder.address}
                  </p>
                </div>
                <div className={styles.termsContainer}>
                  <div className="flex justify-between">
                    <p className={styles.termsTitle}>
                      Brief Terms and Conditions
                    </p>
                    <ExpandOutline
                      color={"#797979"}
                      height="20px"
                      width="20px"
                    />
                  </div>
                  <p className={styles.termsText}>Lorem Ipsum etc etc etc</p>
                </div>
                <div>
                  <p className={styles.noteText}>
                    Note: This contract is generated to support the PO issued by
                    the buyer. This is a contract for recurring transactions
                    while the PO is issued for a specific period.
                  </p>
                </div>
                <div className="mt-2 flex">
                  <div className="mr-2">
                    <input
                      type="checkbox"
                      name="option"
                      value="value"
                      onChange={() => setAcceptTerms(!acceptTerms)}
                    />
                  </div>
                  <p className={styles.acceptTerms}>
                    I acknowledge that I have read and understand the terms and
                    conditions of the Purchase Order and Contract and agree to
                    be bound by them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 mt-5 flex justify-between">
          <button className={styles.rejectButton}>Reject</button>
          <button
            className={
              acceptTerms
                ? styles.approveButtonActive
                : styles.approveButtonInactive
            }
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewPurchaseOrder
