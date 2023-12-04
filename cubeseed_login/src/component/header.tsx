interface DashboardHeadingProps {
  heading: string
  text?: string | React.ReactNode
  subheading?: string
  status?: React.ReactNode
}

export function DashboardHeading({
  heading,
  text,
  subheading,
  status,
}: DashboardHeadingProps) {
  return (
    <div className="text-primary">
      <p className="text-sm font-medium">{subheading}</p>
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold">{heading}</h1>
        {status}
      </div>
      {text && <p className="mt-4 text-base font-normal">{text}</p>}
    </div>
  )
}
