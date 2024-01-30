import carouselStyle from "@/styles/carousel.module.scss"
import Image from "next/image"
import elipse from "@assets/Ellipse 103.svg"

export default function Carousel() {
  return (
    <section className={carouselStyle.carousel}>
      <section className={carouselStyle.card}>
        <p>
          “Using Cubeseed has been a blessing for me as a farmer - there are so
          many opportunities that have been made available with the virtual
          marketplace.”
        </p>
        <section className={carouselStyle.profile}>
          <Image alt="" src={elipse} />
          <section>
            <p>Olakira Musa</p>
            <p>Farmer at (Company name)</p>
          </section>
        </section>
      </section>
    </section>
  )
}
