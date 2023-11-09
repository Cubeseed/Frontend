import { useMultiSteps } from "@/hooks/useMultiSteps"
import progressStyles from "@/styles/progress.module.scss"
import ServiceForm from "../forms/ServiceForm"
import { JSXElementConstructor, ReactElement } from "react"

const stepDivs = [
  /* eslint-disable react/jsx-key */
  <ServiceForm />,
  <div>two</div>,
  <div>three</div>,
  <div>four</div>,
  /* eslint-enable react/jsx-key */
]

type ProgressProps = {
  index: number
  length: ReactElement<any, string | JSXElementConstructor<any>>[]
}

export default function ProgressBar({ index, length }: ProgressProps) {
  return (
    <div className={progressStyles.progressContainer}>
      <progress
        className={progressStyles.progress}
        value={index}
        max={length.length - 1}
      />
    </div>
  )
}
