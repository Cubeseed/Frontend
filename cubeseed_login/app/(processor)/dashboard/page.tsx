"use client"

import CreateInvoice from "@cs/components/create-invoice";
import CreateSucess from "@cs/components/create-success";
import { useState } from "react";

export default async function DashboardPage() {
  const [shouldOpen, setOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

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
      <CreateInvoice
        shouldOpen={shouldOpen}
        setOpen={setOpen}
        setSuccess={setSuccess}
      />
      <CreateSucess isSuccess={isSuccess} setSuccess={setSuccess} />
    </div>
  );
}
