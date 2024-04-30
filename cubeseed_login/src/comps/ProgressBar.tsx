"use client"

interface ProgressBarProps {
  stepsCompleted: number
  totalSteps: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  stepsCompleted,
  totalSteps,
}) => {
  // Calculate the completion percentage
  const completionPercentage = (stepsCompleted / totalSteps) * 100

  return (
    <div className="h-[3px] w-full rounded-full bg-gray-200">
      <div
        className="h-[3px] rounded-full bg-[#fcb103]"
        style={{ width: `${completionPercentage}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
