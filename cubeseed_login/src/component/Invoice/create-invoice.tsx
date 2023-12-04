// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import billto from "@cs/public/bill-to.png"
// import payto from "@cs/public/pay-to.png"
// import Input from "../../comps/Input/input"
// import Textarea from "../../comps/textarea/textarea2"
// import Table from "../../comps/Table/table"
// import CreateSucess from "./create-success"
// import { BillType, OrderType, SummaryType } from "@cs/types"
// import { DashboardHeading } from "../header"

// export default function CreateInvoice() {
//   const [shouldOpen, setOpen] = useState(false)
//   const [isSuccess, setSuccess] = useState(false)

//   const billerData = [
//     { name: "Name", value: "Farmer&apos;s name" },
//     { name: "Company", value: "Farm name" },
//     {
//       name: "Contact",
//       value: `+230 200 6005 email@site.com`,
//     },
//     {
//       name: "Address",
//       value: "Building, Street Address City, State/Province, Country",
//     },
//   ]

//   const renderBiller = (item: BillType) => (
//     <tr>
//       <td className="px-3">{item.name}</td>
//       <td className="px-3">{item.value}</td>
//     </tr>
//   )

//   const orderHeaders = [
//     "Service",
//     "Quantity",
//     "kg/ml",
//     "Unit Price",
//     "Total Price",
//   ]

//   const orderData = [
//     {
//       service: "Strawberry Jam",
//       quantity: "50",
//       unit: "kg/ml",
//       price: "#5.00",
//       total: "₦250",
//     },
//     {
//       service: "Strawberry Jam",
//       quantity: "50",
//       unit: "kg/ml",
//       price: "#5.00",
//       total: "₦250",
//     },
//   ]

//   const renderOrder = (item: OrderType) => (
//     <>
//       <tr className="bg-[#F9FFFF]">
//         <td className="p-4">{item.service}</td>
//         <td>{item.quantity}</td>
//         <td>{item.unit}</td>
//         <td>{item.price}</td>
//         <td>{item.total}</td>
//       </tr>
//       <tr>
//         <td colSpan={4} className="p-4">
//           <span className="block">Details</span>
//           <span>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
//             natus!
//           </span>
//         </td>
//       </tr>
//     </>
//   )

//   const summmaryData = [
//     { name: "Total Quantity:", value: "150kg" },
//     { name: "Subtotal:", value: "₦ 750.00" },
//     { name: "Total Tax:", value: "₦ 00.00" },
//   ]

//   const renderSummary = (item: SummaryType) => (
//     <tr>
//       <td className="text-right">{item.name}:</td>
//       <td className="p-1 text-right">{item.value}</td>
//     </tr>
//   )

//   return (
//     <div className="relative flex justify-end px-4 pt-8">
//       <div>
//         <button
//           className="flex h-[44px] items-center rounded-[100px] border border-yellow-400 bg-transparent px-6 py-3 font-light text-[#886634]"
//           onClick={() => setOpen(true)}
//         >
//           Create +
//         </button>
//       </div>
//       {shouldOpen && (
//         <div className="fixed inset-0 grid h-screen w-screen items-center backdrop-brightness-50">
//           <div className="relative mx-auto mt-8 max-h-[90%] w-[60%] self-start overflow-auto rounded-bl-[35px] bg-white shadow-lg">
//             <div className="relative p-8 pb-16 text-[#002629]">
//               <DashboardHeading
//                 heading="Invoice"
//                 text="Fill out the missing information and an invoice will be created
//                 and sent to [farmer’s name]."
//                 subheading="Order ID &gt; Invoice ID "
//               />
//               <span
//                 className="absolute right-[3%] top-[1%] z-10 grid cursor-pointer items-center rounded-full"
//                 onClick={() => setOpen(false)}
//               >
//                 X
//               </span>
//               <form action="">
//                 <div>
//                   <h2 className="mt-8">Add Information</h2>
//                   <div className="mt-8 flex gap-4">
//                     <Input label="Invoice Date" type="date" />
//                     <Input label="Payment Due Date" type="date" />
//                   </div>
//                   <div className="mt-4">
//                     <Textarea
//                       className="w-full rounded-[4px] border border-gray-300 text-gray-900"
//                       name=""
//                       id=""
//                       rows={4}
//                       label="Notes(optional)"
//                     />
//                     <p className="text-right text-sm font-normal text-[#6A7370]">
//                       200 characters left
//                     </p>
//                   </div>
//                   <section>
//                     <h4>Bill to</h4>
//                     <div className="mt-4 flex gap-4 rounded-[20px] bg-[#F0F6F6] p-6">
//                       <div>
//                         <Image
//                           src={billto}
//                           width={88}
//                           height={88}
//                           alt="@/public/bill-to.png"
//                           className="rounded-full "
//                         />
//                       </div>
//                       <Table items={billerData} render={renderBiller} />
//                     </div>
//                   </section>
//                   <section className="mt-8">
//                     <h4>Pay to</h4>
//                     <div className="mt-4 flex gap-4 rounded-[20px] bg-[#F0F6F6] p-6">
//                       <div>
//                         <Image
//                           src={payto}
//                           width={88}
//                           height={88}
//                           alt="pay to"
//                           className="rounded-full "
//                         />
//                       </div>
//                       <Table items={billerData} render={renderBiller} />
//                     </div>
//                   </section>
//                   <section className="mt-8">
//                     <h4>Order</h4>
//                     <div className="mt-4">
//                       <Table
//                         headers={orderHeaders}
//                         items={orderData}
//                         render={renderOrder}
//                         className="w-full rounded-[4px] border border-[#03656B] text-left text-sm font-normal"
//                         thStyle="border-b border-[#03656B]"
//                       />
//                     </div>
//                   </section>

//                   <section className="mt-8 flex justify-end">
//                     <div className="w-[70%] rounded-[4px] border border-[#03656B] bg-[#F9FFFF] px-8 py-4">
//                       <Table
//                         items={summmaryData}
//                         render={renderSummary}
//                         className="w-full text-sm font-normal text-[#03656B]"
//                         extra={
//                           <tr className="border-t border-[#03656B] text-black">
//                             <td className="text-right">Total Estimate:</td>
//                             <td className="p-1 text-right">₦ 0,000.00</td>
//                           </tr>
//                         }
//                       />
//                     </div>
//                   </section>

//                   <section className="mt-8">
//                     <h4 className="text-base font-normal">Sign and Date</h4>
//                     <div className="mt-6 flex gap-4">
//                       <input type="checkbox" name="" id="" />
//                       <p className="text-sm font-normal">
//                         Confirm that you have reviewed the information above.
//                       </p>
//                     </div>
//                     <div className="mt-6 flex gap-2">
//                       <Input label="Your Signature" type="text" />
//                       <Input label="Today's Date" type="date" />
//                     </div>
//                   </section>
//                 </div>
//               </form>
//             </div>
//             <footer className="sticky bottom-0 left-0 z-10 bg-white p-4 text-base shadow-[0px_-7px_10px_0px_#03656B24]">
//               <div className="flex w-full justify-between">
//                 <button className="flex h-[44px] items-center rounded-[100px] bg-[#03656B] px-6 py-3 font-light text-white">
//                   Close
//                 </button>
//                 <div className="flex gap-4">
//                   <button className="flex h-[44px] items-center rounded-[100px] border border-yellow-400 bg-transparent px-6 py-3 font-light text-[#886634]">
//                     Save as Draft
//                   </button>
//                   <button
//                     onClick={() => setSuccess(true)}
//                     className="flex h-[44px] items-center rounded-[100px] bg-[#03656B] px-6 py-3 font-light text-white"
//                   >
//                     Send Invoice
//                   </button>
//                 </div>
//               </div>
//             </footer>
//           </div>
//         </div>
//       )}
//       {isSuccess && (
//         <CreateSucess isSuccess={isSuccess} setSuccess={setSuccess} />
//       )}
//     </div>
//   )
// }
