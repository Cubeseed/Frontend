import React, { useState, useEffect } from "react"
import styles from "@/styles/PurchaseOrdersTable.module.css"
import "tailwindcss/tailwind.css"
import ReactPaginate from "react-paginate"
import Link from "next/link"
import { ArrowForwardOutline } from "react-ionicons"
// import flag from "@cs/public/Flag_of_Nigeria.png"

interface PurchaseOrdersTableProps {}

const PurchaseOrdersTable: React.FC<PurchaseOrdersTableProps> = () => {
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
  ] //example data //

  const [orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedOrders = sampleOrders.slice(startIndex, endIndex)

  /* ---uncomment useEffect when api endpoint is added--- */

  // useEffect(() => {
  //   const getPurchaseOrders = async () => {
  //     try {
  //       const response = await fetch(/* api endpoint here */);
  //       const data: Farmer[] = await response.json();
  //       setOrders(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getPurchaseOrders();
  // }, [orders]);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

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
                <p className={styles.viewTab}>View</p>
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
          pageCount={Math.ceil(sampleOrders.length / itemsPerPage)}
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
