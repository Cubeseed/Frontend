import Sidebar from "../components/sidebar/Sidebar"
import ServiceView, {
  ServiceViewProps,
} from "../components/services/ServiceView"

const Store = () => {
  // TODO: Replace with real data from backend here
  const store: ServiceViewProps = {
    name: "Extraordinary Jams",
    location: "Delta, Nigeria",
    businessFunction: "Food Processing Company",
    backgroundImagePath: "/assets/company-strawberry.png",
    logoPath: "/assets/store-logo2.png",
    rating: 5,
    reviews: ["my favorite jam", "excellent"],
    isAdmin: false,
    services: [
      {
        name: "Jam",
        serviceImagePath: "/assets/strawberry-jam.jpeg",
        rating: 5,
        reviews: ["good", "excellent", "will buy again"],
        description:
          "Sun-ripened goodness, crafted into delightful kdfjlkdfldksfjldjl kdjflkdjsfkldlkfjldk dflkdjsl",
        price: 6500.49,
        perkg: 10,
      },
      {
        name: "Jam",
        serviceImagePath: "/assets/strawberry-jam.jpeg",
        rating: 5,
        reviews: ["good", "excellent", "will buy again"],
        description:
          "Sun-ripened goodness, crafted into delightful kdfjlkdfldksfjldjl kdjflkdjsfkldlkfjldk dflkdjsl",
        price: 6500.49,
        perkg: 10,
      },
      {
        name: "Jam",
        serviceImagePath: "/assets/strawberry-jam.jpeg",
        rating: 5,
        reviews: ["good", "excellent", "will buy again"],
        description:
          "Sun-ripened goodness, crafted into delightful kdfjlkdfldksfjldjl kdjflkdjsfkldlkfjldk dflkdjsl",
        price: 6500.49,
        perkg: 10,
      },
      {
        name: "Jam",
        serviceImagePath: "/assets/strawberry-jam.jpeg",
        rating: 5,
        reviews: ["good", "excellent", "will buy again"],
        description:
          "Sun-ripened goodness, crafted into delightful kdfjlkdfldksfjldjl kdjflkdjsfkldlkfjldk dflkdjsl",
        price: 6500.49,
        perkg: 10,
      },
      {
        name: "Jam",
        serviceImagePath: "/assets/strawberry-jam.jpeg",
        rating: 5,
        reviews: ["good", "excellent", "will buy again"],
        description:
          "Sun-ripened goodness, crafted into delightful kdfjlkdfldksfjldjl kdjflkdjsfkldlkfjldk dflkdjsl",
        price: 6500.49,
        perkg: 10,
      },
    ],
  }

  return (
    <div className="flex flex-row">
      {/* TODO: have a drop down menu when the sidebar is collapsed */}
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%]">
        <ServiceView
          name={store.name}
          location={store.location}
          businessFunction={store.businessFunction}
          backgroundImagePath={store.backgroundImagePath}
          logoPath={store.logoPath}
          rating={store.rating}
          reviews={store.reviews}
          services={store.services}
          isAdmin={store.isAdmin}
        />
      </div>
    </div>
  )
}

export default Store
