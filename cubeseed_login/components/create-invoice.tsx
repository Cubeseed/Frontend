"use client";

import Image from "next/image";
import { useState } from "react";
import billto from "../public/bill-to.png";
import payto from "../public/pay-to.png";

export default function CreateInvoice() {
  const [shouldOpen, setOpen] = useState(false);
  return (
    <div className="flex pt-8 justify-end relative">
      <div>
        <button onClick={() => setOpen(true)}>Create</button>
      </div>
      {shouldOpen && (
        <div className="grid items-center h-screen w-screen fixed inset-0 backdrop-brightness-50">
          <div className="w-[60%] bg-white mx-auto self-start mt-8 relative p-8 overflow-auto max-h-[90%]">
            <h1 className="">Invoice</h1>
            <p className="text-base font-normal text-[#002629] mt-4">
              Fill out the missing information and an invoice will be created
              and sent to [farmer’s name].
            </p>

            <span
              className="grid items-center absolute right-[3%] top-[1%] cursor-pointer z-10 rounded-full"
              onClick={() => setOpen(false)}
            >
              <span className="fixed font-medium bg-green-700 rounded-full p-2">
                X
              </span>
            </span>
            <form action="">
              <div>
                <h2 className="mt-8">Add Information</h2>
                <div className="flex gap-4 mt-8">
                  <div className="w-72 relative">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="peer h-10 px-3 py-2.5 font-sans text-sm font-normal w-full border rounded-[4px] border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="john@doe.com"
                    />
                    <label
                      htmlFor="date"
                      className="absolute left-1.5 z-10 -top-1.5 text-gray-600 leading-tight text-[11px] bg-transparent font-normal transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.4 peer-focus:text-red-600 peer-focus:text-[11px]"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="w-72 relative">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="peer h-10 px-3 py-2.5 font-sans text-sm font-normal w-full border rounded-[4px] border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="john@doe.com"
                    />
                    <label
                      htmlFor="date"
                      className="absolute left-1.5 z-10 -top-1.5 text-gray-600 leading-tight text-[11px] bg-transparent font-normal transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.4 peer-focus:text-red-600 peer-focus:text-[11px]"
                    >
                      Email address
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    className="w-full border rounded-[4px] border-gray-300 text-gray-900"
                    name=""
                    id=""
                    rows={4}
                  ></textarea>
                  <p className="font-normal text-sm text-right">
                    200 characters left
                  </p>
                </div>
                <div>
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
                    <table>
                      <tbody className="text-sm font-normal border-collapse">
                        <tr>
                          <td className="px-3">Name&#58;</td>
                          <td className="px-3">Farmer&apos;s name</td>
                        </tr>
                        <tr>
                          <td className="px-3">Company&#58;</td>
                          <td className="px-3">Farm name</td>
                        </tr>
                        <tr>
                          <td className="px-3">Contact&#58;</td>
                          <td className="px-3">
                            +230 200 6005 <br /> email@site.com
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3">Address&#58;</td>
                          <td className="px-3">
                            Building, Street Address City, State/Province,
                            Country
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
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
                    <table>
                      <tbody className="text-sm font-normal border-collapse">
                        <tr>
                          <td className="px-3">Name&#58;</td>
                          <td className="px-3">Your name</td>
                        </tr>
                        <tr>
                          <td className="px-3">Company&#58;</td>
                          <td className="px-3">Farm name</td>
                        </tr>
                        <tr>
                          <td className="px-3">Contact&#58;</td>
                          <td className="px-3">
                            +230 200 6005 <br /> email@site.com
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3">Address&#58;</td>
                          <td className="px-3">
                            Building, Street Address City, State/Province,
                            Country
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
                  <h4>Order</h4>
                  <div className="mt-4">
                    <table className="font-normal border border-[#03656B] w-full">
                      <thead className="border">
                        <tr>
                          <th>Service</th>
                          <th>Quantity</th>
                          <th>kg/ml</th>
                          <th>Unit Price</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-[#F9FFFF]">
                          <td className="py-4">Strawberry Jam</td>
                          <td>50</td>
                          <td>kg</td>
                          <td>#5.00</td>
                          <td>250.00</td>
                        </tr>
                        <tr>
                          <p className="block">Details</p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magni, natus!
                          </p>
                        </tr>
                        <tr className="bg-[#F9FFFF]">
                          <td className="py-4">Strawberry Jam</td>
                          <td>50</td>
                          <td>kg</td>
                          <td>#5.00</td>
                          <td>250.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <div className="border border-[#03656B] bg-[#F9FFFF] rounded-[4px] w-[70%] py-4 px-8">
                    <table className="w-full font-normal text-sm text-[#03656B]">
                      <tr>
                        <td className="text-right">Total Quantity:</td>
                        <td className="text-right p-1">150kg</td>
                      </tr>
                      <tr>
                        <td className="text-right">Subtotal:</td>
                        <td className="text-right p-1">₦ 750.00</td>
                      </tr>
                      <tr>
                        <td className="text-right">Total Tax:</td>
                        <td className="text-right p-1">₦ 00.00</td>
                      </tr>
                      <tr className="text-black border-t border-[#03656B]">
                        <td className="text-right">Total Estimate:</td>
                        <td className="text-right p-1">₦ 0,000.00</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
