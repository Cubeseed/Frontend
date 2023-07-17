import carouselStyle from "@/styles/carousel.module.scss"
import Image from "next/image"
import elipse from "@/assets/Ellipse 103.svg"

export default function Carousel() {
  return (
    <section className={carouselStyle.carousel}>
      <section className={carouselStyle.card}>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </p>
        <section className={carouselStyle.profile}>
          <Image alt="" src={elipse}/>
          <section>
            <p>FirstName LastName</p>
            <p>Occupation</p>
            <p>Company/Farm Name</p>
          </section>
        </section>
      </section>
    </section>
  )
}
