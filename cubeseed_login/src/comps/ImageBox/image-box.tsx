import { validFileType } from "@cs/lib/util"
import Image, { StaticImageData } from "next/image"
import React, { Dispatch, ElementRef, SetStateAction, useRef } from "react"

interface ImageBoxProps {
  src: string | StaticImageData
  setSrc: Dispatch<SetStateAction<string | StaticImageData>>
}

const ImageBox = ({ src, setSrc }: ImageBoxProps) => {
  const fileRef = useRef<ElementRef<"input">>(null)

  const handleClick = () => {
    if (fileRef.current) fileRef.current.click()
  }
  const handleFileChange = () => {
    if (fileRef.current?.files) {
      const files = fileRef.current.files
      console.log({ zero: files[0] })
      Array.from(files).forEach((file) => {
        if (validFileType(file)) {
          console.log({ size: file.size })
        }
        console.log({ file })
        const image = URL.createObjectURL(file)
        console.log({ image })
        setSrc(image)
      })
    }
  }
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="aspect-square h-[165px] w-[165px]">
        <Image
          src={src}
          alt="avatar"
          width={165}
          height={165}
          style={{ height: "100%", width: "100%" }}
          className="rounded-full"
        />
      </div>
      <input
        ref={fileRef}
        type="file"
        name="avatar"
        id="avatar"
        accept=".jpg, .jpeg, .png"
        className="hidden"
        onChange={handleFileChange}
      />
      <a href="#" className="underline" onClick={handleClick}>
        Update Photo
      </a>
    </div>
  )
}

export default ImageBox
