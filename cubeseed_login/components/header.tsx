interface DashboardHeadingProps {
  heading: string;
  text?: string;
  subheading: string;
  status?: React.ReactNode;
}

export function DashboardHeading({
  heading,
  text,
  subheading,
  status,
}: DashboardHeadingProps) {
  return (
    <div className="text-[#002629]">
      <p className="font-medium text-sm">{subheading}</p>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-4xl">{heading}</h1>
        {status}
      </div>
      {text && <p className="text-base font-normal mt-4">{text}</p>}
    </div>
  );
}
