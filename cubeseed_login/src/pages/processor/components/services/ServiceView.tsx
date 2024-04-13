import StoreNavbar from "../navbar/StoreNavbar"
import ServiceCard, { ServiceCardProps } from "./ServiceCard"
import { FaFilter } from "react-icons/fa"

export interface ServiceViewProps {
  name: string
  location: string
  businessFunction: string
  backgroundImagePath: string
  logoPath: string
  rating: number
  reviews: string[]
  services: ServiceCardProps[]
  isAdmin: boolean
}

const ServiceView: React.FC<ServiceViewProps> = ({
  name,
  location,
  businessFunction,
  rating,
  reviews,
  backgroundImagePath,
  logoPath,
  services,
  isAdmin,
}) => {
  return (
    // TODO: paginated (more pages)
    <div>
      <StoreNavbar
        name={name}
        location={location}
        businessFunction={businessFunction}
        rating={rating}
        reviews={reviews}
        backgroundImagePath={backgroundImagePath}
        logoPath={logoPath}
        isAdmin={isAdmin}
      />
      <div className="flex flex-col px-12 pt-6">
        {!isAdmin ? (
          <div className="flex cursor-pointer flex-row items-center justify-between">
            <span className="my-6 text-[24px] font-bold">
              {services.length} Services
            </span>
            <div className="flex flex-row items-center gap-1 text-[#03656b]">
              <FaFilter size={14} />
              <span className="text-[12px]">Filter and Sort</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              serviceImagePath={service.serviceImagePath}
              rating={service.rating}
              reviews={service.reviews}
              description={service.description}
              price={service.price}
              perkg={service.perkg}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceView
