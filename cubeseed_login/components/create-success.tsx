import Image from "next/image";
import check from "@cs/public/check.svg";
import ellipse from "@cs/public/ellipse.png";
import Link from "next/link";

export interface CreateSuccessProps {
  isSuccess: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateSucess({ isSuccess, setSuccess }: CreateSuccessProps) {
  if(!isSuccess) return null;
  return (
    <div className="grid items-center h-screen w-screen fixed inset-0 backdrop-brightness-[30%]">
      <div className="grid place-items-center w-[60%] py-8 px-8 bg-white text-primary-100 mx-auto max-h-[90%] shadow-lg relative rounded-[25px]">
        <span
          className="grid items-center absolute right-[3%] top-[1%] cursor-pointer z-10"
          onClick={() => setSuccess(false)}
        >
          X
        </span>
        <div>
          <Image src={check} alt={check} />
        </div>
        <p className="text-[22px] font-medium">Your invoice has been sent successfully!</p>
        <p>Your invoice can now be downloaded.</p>
        <div className="w-full flex justify-between font-medium mt-20">
          <button onClick={() => setSuccess(false)} className="text-accent rounded-[100px] py-3 px-6 h-[44px] bg-transparent flex items-center border-2 border-secondary">
            Close
          </button>
          <Link className="bg-secondary text-black rounded-[100px] py-3 px-6 h-[44px] flex items-center" href="dashboard/invoice">View Invoice</Link> 
        </div>
      </div>
    </div>
  );
}
