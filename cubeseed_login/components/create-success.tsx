import Image from "next/image"
import check from "@cs/public/check.svg"
import ellipse from "@cs/public/ellipse.png"
import Link from "next/link"

export interface CreateSuccessProps {
  isSuccess: boolean
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateSucess({
  isSuccess,
  setSuccess,
}: CreateSuccessProps) {
  if (!isSuccess) return null
  return (
    <div className="fixed inset-0 grid h-screen w-screen items-center backdrop-brightness-[30%]">
      <div className="text-primary-100 relative mx-auto grid max-h-[90%] w-[60%] place-items-center rounded-[25px] bg-white p-8 shadow-lg">
        <span
          className="absolute right-[3%] top-[1%] z-10 grid cursor-pointer items-center"
          onClick={() => setSuccess(false)}
        >
          X
        </span>
        <div>
          <Image src={check} alt={check} />
        </div>
        <p className="text-[22px] font-medium">
          Your invoice has been sent successfully!
        </p>
        <p>Your invoice can now be downloaded.</p>
        <div className="mt-20 flex w-full justify-between font-medium">
          <button
            onClick={() => setSuccess(false)}
            className="text-accent border-secondary flex h-[44px] items-center rounded-[100px] border-2 bg-transparent px-6 py-3"
          >
            Close
          </button>
          <Link
            className="bg-secondary flex h-[44px] items-center rounded-[100px] px-6 py-3 text-black"
            href="dashboard/invoice"
          >
            View Invoice
          </Link>
        </div>
      </div>
    </div>
  )
}
