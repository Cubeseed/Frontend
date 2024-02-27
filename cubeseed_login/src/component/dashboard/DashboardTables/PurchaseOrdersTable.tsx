import React, { useState, useEffect } from "react"
import styles from "@/styles/PurchaseOrdersTable.module.css"
import "tailwindcss/tailwind.css"
import ReactPaginate from "react-paginate"
import Link from "next/link"
import { ArrowForwardOutline } from "react-ionicons"
import { useRouter } from "next/router"

interface PurchaseOrdersTableProps {
  tableData: {
    id: number
    farm: string
    type: string
    delivery: string
    price: string
  }[]
}

const PurchaseOrdersTable: React.FC<PurchaseOrdersTableProps> = ({
  tableData,
}) => {
  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedOrders = tableData.slice(startIndex, endIndex)

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const router = useRouter()

  return (
    <div className={styles.table}>
      <div className="m-5">
        <div className={styles.titleRow}>
          <p className="ms-1 w-2/6">Order</p>
          <p className="w-1/6">Type</p>
          <p className="w-1/6">Delivery By</p>
          <p className="w-1/6">Total Price</p>
          <p className="w-1/6">Manage</p>
        </div>
        <div>
          {displayedOrders.map((order) => (
            <div key={order.id} className={`${styles.dataRow} flex flex-row`}>
              <div className="ms-2 w-1/6">
                <p>{order.id}</p>
                <p className={styles.farmName}>{order.farm}</p>
              </div>
              <p className={`${styles.verticalLine} w-1/6`}>|</p>
              <p className="w-1/6">{order.type}</p>
              <p className="w-1/6">{order.delivery}</p>
              <div className="flex w-1/6">
                <p>&#8358; {order.price}</p>
                {/* <img src={flag} alt="Nigerian Flag" /> */}
              </div>
              <Link className="flex w-1/6 items-center text-lg" href={""}>
                <button className={styles.viewTab}>View</button>
                <ArrowForwardOutline
                  color={"#00000"}
                  height="20px"
                  width="20px"
                />
              </Link>
            </div>
          ))}
        </div>
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={">"}
          previousLabel={"<"}
          pageCount={Math.ceil(tableData.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={styles.paginationContainer}
          activeClassName={styles.paginationActive}
          pageClassName={styles.paginatioPage}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.paginationArrow}
          nextClassName={styles.paginationArrow}
        />
      </div>
    </div>
  )
}

export default PurchaseOrdersTable
