import React from "react";
import { DashboardHeading } from "./header";
import Table from "./pieces/table";
import { BillType, OrderType, SummaryType } from "@cs/types";
import Image from "next/image";
import Link from "next/link";
import face from "@cs/assets/svg/face.svg";
import cal from "@cs/assets/svg/cal.svg";
import dload from "@cs/assets/svg/download.svg";

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
  ];

  const renderSender = (item: BillType) => (
    <tr>
      <td className="py-2 pr-3">{item.name}</td>
      <td className="">{item.value}</td>
    </tr>
  );

  const orderHeaders = [
    "Service",
    "Details",
    "Quantity",
    "kg/ml",
    "Unit Price",
    "Total Price",
  ];

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
  ];

  const renderOrder = (item: OrderType) => (
    <>
      <tr className="bg-[#F9FFFF] border border-primary-100">
        <td className="py-4 px-4">{item.service}</td>
        <td className="py-4 px-4">{item.details}</td>
        <td className="py-4 px-4">{item.quantity}</td>
        <td className="py-4 px-4">{item.unit}</td>
        <td className="py-4 px-4">{item.price}</td>
        <td className="py-4 px-4">{item.total}</td>
      </tr>
    </>
  );

  const summmaryData = [
    { name: "Total Quantity:", value: "150kg" },
    { name: "Subtotal:", value: "₦ 750.00" },
    { name: "Total Tax:", value: "₦ 00.00" },
  ];

  const renderSummary = (item: SummaryType) => (
    <tr>
      <td className="text-right">{item.name}:</td>
      <td className="text-right p-1">{item.value}</td>
    </tr>
  );

  return (
    <div>
      <DashboardHeading
        heading="Invoice"
        subheading="Order ID > Invoice #"
        status={
          <span className="flex gap-1 items-center bg-csneutral-900 border border-csneutral-700 rounded-[4px] px-2 font-medium text-csneutral-300 text-xs h-[22px]">
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
        <section className="flex justify-between mt-8 divide-x-2 divide-solid">
          <div className="text-primary px-4">
            <div className="flex justify-between py-3 border-b-2 border-[#D0DAD7]">
              <h5 className="text-sm font-semibold">Sent by</h5>
              <p className="flex items-center gap-1">
                <Image src={face} alt="face" width={15} height={15} />
                <span className="text-primary-200 text-[11px]">
                  View Profile
                </span>
              </p>
            </div>
            <Table className="" items={senderData} render={renderSender} />
          </div>
          <div className="text-primary px-4">
            <div className="flex justify-between py-3 border-b-2 border-[#D0DAD7]">
              <h5 className="text-sm font-semibold">Delivered to</h5>
              <p className="flex items-center gap-1">
                <Image src={face} alt="face" width={15} height={15} />
                <span className="text-primary-200 text-[11px]">
                  View Profile
                </span>
              </p>
            </div>
            <Table className="" items={senderData} render={renderSender} />
          </div>
          <div className="text-primary px-4">
            <div className="flex justify-between py-3 border-b-2 border-[#D0DAD7]">
              <h5 className="text-sm font-semibold">Important dates</h5>
              <p className="flex items-center gap-1">
                <Image src={cal} alt="face" width={15} height={15} />
                <span className="text-primary-200 text-[11px]">
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
            className="w-full font-normal text-sm border border-primary-100 rounded-[4px] text-left"
            thStyle="border border-primary-100"
          />
        </section>
        <section className="flex items-stretch gap-2 justify-between mt-8">
          <div className="w-full flex-2 bg-[#7DB7BB] rounded-[4px] p-4">
            <h5 className="font-semibold">Notes</h5>
            <p className="text-primary text-xs mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, praesentium!
            </p>
          </div>
          <div className="w-full">
            <div className="border border-primary-100 bg-[#F9FFFF] rounded-[4px] py-4 px-8">
              <Table
                items={summmaryData}
                render={renderSummary}
                className="w-full font-normal text-sm text-primary-100"
                extra={
                  <tr className="text-black border-t border-primary-100">
                    <td className="text-right">Total Estimate:</td>
                    <td className="text-right p-1">₦ 0,000.00</td>
                  </tr>
                }
              />
            </div>
          </div>
        </section>
        
      </div>
      <section className="flex mt-14 justify-between">
            <Link className="text-white rounded-[100px] py-3 px-6 h-[44px] bg-primary-100 flex items-center" href="dashboard">Close</Link>
            <button className="bg-secondary text-primary font-medium rounded-[100px] py-3 px-6 h-[44px] flex items-center">Download PDF <Image src={dload} alt="download"/></button>
        </section>
    </div>
  );
}
