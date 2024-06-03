import cal from "@assets/cal.svg"
import dload from "@assets/download.svg"
import face from "@assets/face.svg"
import { BillType, OrderType, SummaryType } from "@cs/types"
import Image from "next/image"
import Link from "next/link"
import Table from "../../comps/Table/table"
import { DashboardHeading } from "../header"

export default function ViewInvoice() {
  const senderData = [
    { name: "Name", value: "Farmer's name" },
    { name: "Company", value: "Farm name" },
    {
      name: "Contact",
      value: `+230 200 6005
        email@site.com`,
    },
    {
      name: "Address",
      value: "Building, Street Address City, State/Province, Country",
    },
  ]

  const renderSender = (item: BillType) => (
    <tr>
      <td className="py-2 pr-3">{item.name}</td>
      <td className="">{item.value}</td>
    </tr>
  )

  const orderHeaders = [
    "Service",
    "Details",
    "Quantity",
    "kg/ml",
    "Unit Price",
    "Total Price",
  ]

  const orderData = [
    {
      service: "Strawberry Jam",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magninatus",
      quantity: "50",
      unit: "kg/ml",
      price: "#5.00",
      total: "₦250",
    },
    {
      service: "Strawberry Jam",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magninatus",
      quantity: "50",
      unit: "kg/ml",
      price: "#5.00",
      total: "₦250",
    },
    {
      service: "Strawberry Jam",
      details:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magninatus",
      quantity: "50",
      unit: "kg/ml",
      price: "#5.00",
      total: "₦250",
    },
  ]

  const renderOrder = (item: OrderType) => (
    <>
      <tr className="border border-primary-100 bg-[#F9FFFF]">
        <td className="p-4">{item.service}</td>
        <td className="p-4">{item.details}</td>
        <td className="p-4">{item.quantity}</td>
        <td className="p-4">{item.unit}</td>
        <td className="p-4">{item.price}</td>
        <td className="p-4">{item.total}</td>
      </tr>
    </>
  )

  const summmaryData = [
    { name: "Total Quantity:", value: "150kg" },
    { name: "Subtotal:", value: "₦ 750.00" },
    { name: "Total Tax:", value: "₦ 00.00" },
  ]

  const renderSummary = (item: SummaryType) => (
    <tr>
      <td className="text-right">{item.name}:</td>
      <td className="p-1 text-right">{item.value}</td>
    </tr>
  )

  return (
    <div>
      <DashboardHeading
        heading="Invoice"
        subheading="Order ID > Invoice #"
        status={
          <span className="flex h-[22px] items-center gap-1 rounded-[4px] border border-csneutral-700 bg-csneutral-900 px-2 text-xs font-medium text-csneutral-300">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5.5" r="4.5" stroke="#46524E" />
            </svg>
            <span className="">Pending</span>
          </span>
        }
      />
      <div className="px-8">
        <section className="mt-8 flex justify-between divide-x-2 divide-solid">
          <div className="px-4 text-primary">
            <div className="flex justify-between border-b-2 border-[#D0DAD7] py-3">
              <h5 className="text-sm font-semibold">Sent by</h5>
              <p className="flex items-center gap-1">
                <Image src={face} alt="face" width={15} height={15} />
                <span className="text-[11px] text-primary-200">
                  View Profile
                </span>
              </p>
            </div>
            <Table className="" items={senderData} render={renderSender} />
          </div>
          <div className="px-4 text-primary">
            <div className="flex justify-between border-b-2 border-[#D0DAD7] py-3">
              <h5 className="text-sm font-semibold">Delivered to</h5>
              <p className="flex items-center gap-1">
                <Image src={face} alt="face" width={15} height={15} />
                <span className="text-[11px] text-primary-200">
                  View Profile
                </span>
              </p>
            </div>
            <Table className="" items={senderData} render={renderSender} />
          </div>
          <div className="px-4 text-primary">
            <div className="flex justify-between border-b-2 border-[#D0DAD7] py-3">
              <h5 className="text-sm font-semibold">Important dates</h5>
              <p className="flex items-center gap-1">
                <Image src={cal} alt="face" width={15} height={15} />
                <span className="text-[11px] text-primary-200">
                  View Calendar
                </span>
              </p>
            </div>
            <Table className="" items={senderData} render={renderSender} />
          </div>
        </section>
        <section className="mt-8">
          <Table
            headers={orderHeaders}
            items={orderData}
            render={renderOrder}
            className="w-full rounded-[4px] border border-primary-100 text-left text-sm font-normal"
            thStyle="border border-primary-100"
          />
        </section>
        <section className="mt-8 flex items-stretch justify-between gap-2">
          <div className="flex-2 w-full rounded-[4px] bg-[#7DB7BB] p-4">
            <h5 className="font-semibold">Notes</h5>
            <p className="mt-4 text-xs text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, praesentium!
            </p>
          </div>
          <div className="w-full">
            <div className="rounded-[4px] border border-primary-100 bg-[#F9FFFF] px-8 py-4">
              <Table
                items={summmaryData}
                render={renderSummary}
                className="w-full text-sm font-normal text-primary-100"
                extra={
                  <tr className="border-t border-primary-100 text-black">
                    <td className="text-right">Total Estimate:</td>
                    <td className="p-1 text-right">₦ 0,000.00</td>
                  </tr>
                }
              />
            </div>
          </div>
        </section>
      </div>
      <section className="mt-14 flex justify-between">
        <Link
          className="flex h-[44px] items-center rounded-[100px] bg-primary-100 px-6 py-3 text-white"
          href="dashboard"
        >
          Close
        </Link>
        <button className="flex h-[44px] items-center rounded-[100px] bg-secondary px-6 py-3 font-medium text-primary">
          Download PDF <Image src={dload} alt="download" />
        </button>
      </section>
    </div>
  )
}
