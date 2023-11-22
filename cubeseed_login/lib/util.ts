import clsx from "clsx"
import { ClassNameValue, twMerge } from "tailwind-merge"

export const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
]

export function validFileType(file: File) {
  return fileTypes.includes(file.type)
}

export function returnFileSize(number: number) {
  if (number < 1024) {
    return `${number} bytes`
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`
  }
}

export function cmb(...classLists: ClassNameValue[]) {
  return twMerge(clsx(classLists))
}
