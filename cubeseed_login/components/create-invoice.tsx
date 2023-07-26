"use client";

import Image from "next/image";
import { useState } from "react";
import billto from "@cs/public/bill-to.png";
import payto from "@cs/public/pay-to.png";
import Input from "./pieces/input";
import Textarea from "./pieces/textarea";
import Table from "./pieces/table";
import CreateSucess from "./create-success";
import { BillType, OrderType, SummaryType } from "@cs/types";
import { DashboardHeading } from "./header";

export default function CreateInvoice() {
  const [shouldOpen, setOpen] = useState(false)
  const [isSuccess, setSuccess] = useState(false)

  const billerData = [
    { name: "Name", value: "Farmer&apos;s name" },
    { name: "Company", value: "Farm name" },
    {
      name: "Contact",
      value: `+230 200 6005 email@site.com`,
    },
    {
      name: "Address",
      value: "Building, Street Address City, State/Province, Country",
    },
  ];

  const renderBiller = (item: BillType) => (
    <tr>
      <td className="px-3">{item.name}</td>
      <td className="px-3">{item.value}</td>
    </tr>
  );

  const orderHeaders = [
    "Service",
    "Quantity",
    "kg/ml",
    "Unit Price",
    "Total Price",
  ];

  const orderData = [
    {
      service: "Strawberry Jam",
      quantity: "50",
      unit: "kg/ml",
      price: "#5.00",
      total: "₦250",
    },
    {
      service: "Strawberry Jam",
      quantity: "50",
      unit: "kg/ml",
      price: "#5.00",
      total: "₦250",
    },
  ];

  const renderOrder = (item: OrderType) => (
    <>
      <tr className="bg-[#F9FFFF]">
        <td className="p-4">{item.service}</td>
        <td>{item.quantity}</td>
        <td>{item.unit}</td>
        <td>{item.price}</td>
        <td>{item.total}</td>
      </tr>
      <tr>
        <td colSpan={4} className="p-4">
          <span className="block">Details</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            natus!
          </span>
        </td>
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
    <div className="flex pt-8 px-4 justify-end relative">
      <div>
        <button
          className="text-[#886634] font-light rounded-[100px] py-3 px-6 h-[44px] bg-transparent flex items-center border border-yellow-400"
          onClick={() => setOpen(true)}
        >
          Create +
        </button>
      </div>
      {shouldOpen && (
        <div className="grid items-center h-screen w-screen fixed inset-0 backdrop-brightness-50">
          <div className="w-[60%] bg-white mx-auto self-start mt-8 overflow-auto max-h-[90%] relative rounded-bl-[35px] shadow-lg">
            <div className="relative p-8 pb-16 text-[#002629]">
              <DashboardHeading
                heading="Invoice"
                text="Fill out the missing information and an invoice will be created
                and sent to [farmer’s name]."
                subheading="Order ID &gt; Invoice ID "
              />
              <span
                className="grid items-center absolute right-[3%] top-[1%] cursor-pointer z-10 rounded-full"
                onClick={() => setOpen(false)}
              >
                X
              </span>
              <form action="">
                <div>
                  <h2 className="mt-8">Add Information</h2>
                  <div className="flex gap-4 mt-8">
                    <Input label="Invoice Date" type="date" />
                    <Input label="Payment Due Date" type="date" />
                  </div>
                  <div className="mt-4">
                    <Textarea
                      className="w-full border rounded-[4px] border-gray-300 text-gray-900"
                      name=""
                      id=""
                      rows={4}
                      label="Notes(optional)"
                    />
                    <p className="font-normal text-sm text-right text-[#6A7370]">
                      200 characters left
                    </p>
                  </div>
                  <section>
                    <h4>Bill to</h4>
                    <div className="flex gap-4 p-6 bg-[#F0F6F6] rounded-[20px] mt-4">
                      <div>
                        <Image
                          src={billto}
                          width={88}
                          height={88}
                          alt="@/public/bill-to.png"
                          className="rounded-full "
                        />
                      </div>
                      <Table items={billerData} render={renderBiller} />
                    </div>
                  </section>
                  <section className="mt-8">
                    <h4>Pay to</h4>
                    <div className="flex gap-4 p-6 bg-[#F0F6F6] rounded-[20px] mt-4">
                      <div>
                        <Image
                          src={payto}
                          width={88}
                          height={88}
                          alt="pay to"
                          className="rounded-full "
                        />
                      </div>
                      <Table items={billerData} render={renderBiller} />
                    </div>
                  </section>
                  <section className="mt-8">
                    <h4>Order</h4>
                    <div className="mt-4">
                      <Table
                        headers={orderHeaders}
                        items={orderData}
                        render={renderOrder}
                        className="w-full font-normal text-sm border border-[#03656B] rounded-[4px] text-left"
                        thStyle="border-b border-[#03656B]"
                      />
                    </div>
                  </section>

                  <section className="flex justify-end mt-8">
                    <div className="border border-[#03656B] bg-[#F9FFFF] rounded-[4px] w-[70%] py-4 px-8">
                      <Table
                        items={summmaryData}
                        render={renderSummary}
                        className="w-full font-normal text-sm text-[#03656B]"
                        extra={
                          <tr className="text-black border-t border-[#03656B]">
                            <td className="text-right">Total Estimate:</td>
                            <td className="text-right p-1">₦ 0,000.00</td>
                          </tr>
                        }
                      />
                    </div>
                  </section>

                  <section className="mt-8">
                    <h4 className="font-normal text-base">Sign and Date</h4>
                    <div className="flex mt-6 gap-4">
                      <input type="checkbox" name="" id="" />
                      <p className="font-normal text-sm">
                        Confirm that you have reviewed the information above.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <Input label="Your Signature" type="text" />
                      <Input label="Today's Date" type="date" />
                    </div>
                  </section>
                </div>
              </form>
            </div>
            <footer className="sticky z-10 bottom-0 left-0 bg-white shadow-[0px_-7px_10px_0px_#03656B24] p-4 text-base">
              <div className="flex justify-between w-full">
                <button className="text-white font-light bg-[#03656B] rounded-[100px] py-3 px-6 h-[44px] flex items-center">
                  Close
                </button>
                <div className="flex gap-4">
                  <button className="text-[#886634] font-light rounded-[100px] py-3 px-6 h-[44px] bg-transparent flex items-center border border-yellow-400">
                    Save as Draft
                  </button>
                  <button
                    onClick={() => setSuccess(true)}
                    className="text-white font-light bg-[#03656B] rounded-[100px] py-3 px-6 h-[44px] flex items-center"
                  >
                    Send Invoice
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
      {isSuccess && <CreateSucess isSuccess={isSuccess} setSuccess={setSuccess} />}
    </div>
  );
}
