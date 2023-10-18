"use client"

import { useState } from "react"
import { DashboardHeading } from "./header"
import ImageBox from "./pieces/image-box"
import camera from "@cs/public/camera.png"
import { StaticImageData } from "next/image"
import Textarea from "./pieces/textarea"
import Input from "./pieces/input"
import InputRadio from "./pieces/input-radio"
import Link from "next/link"
import Select from "./pieces/select"

function EditUserProfile() {
  const [src, setSrc] = useState<string | StaticImageData>(() => camera)
  const text = () => (
    <p>
      This will help investors learn more about you!
      <br />
      We recommend completing 100% of the profile sections.
    </p>
  )
  return (
    <div className="mx-auto w-[900px] space-y-6 py-16">
      <form className="mx-auto w-[700px] space-y-12">
        <div className="max-w-[590px]">
          <DashboardHeading heading="Edit profile" text={text()} />
        </div>
        <div className="mx-auto w-[700px]">
          <div className="flex justify-between gap-12">
            <ImageBox src={src} setSrc={setSrc} />
            <Textarea
              label="About me"
              placeholder=""
              rows={8}
              className="min-h-full"
            />
          </div>
          <hr className="my-8" />
          <div className="space-y-12 px-8">
            <div className="space-y-8">
              <div className="flex justify-between gap-4">
                <Input className="" label="Farm Name" placeholder="" required />
                <Input label="Farm Size" placeholder="" required />
              </div>
              <div className="flex justify-between gap-4">
                <Select
                  options={["Input, Input, Input", ""]}
                  className=""
                  label="Crops"
                  required
                />
                <Select
                  options={["Input, Input, Input"]}
                  label="Livestock"
                  required
                />
              </div>
            </div>
            <p className="text-primary">
              {" "}
              <span className="mx-0.5 text-secondary">*</span> Do you own or
              rent a farm?
            </p>
            <div className="flex">
              <InputRadio name="own" label="I own my farm" />
              <InputRadio
                type="radio"
                name="own"
                label="I am renting my farm"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between font-medium">
          <Link
            href="/dashboard/profiles"
            className="flex h-[44px] items-center rounded-[100px] border-2 border-secondary bg-transparent px-6 py-3 text-accent"
          >
            Cancel
          </Link>
          <Link
            className="flex h-[44px] items-center rounded-[100px] bg-secondary px-6 py-3 text-black"
            href="dashboard/invoice"
          >
            Update
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EditUserProfile
