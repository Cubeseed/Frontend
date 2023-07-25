import Service from "../service-instance/Service";
import serviceStyles from "@/styles/serviceform.module.scss"


export default function ServiceForm() {


  return (
    <form className={serviceStyles.form}>
        <Service value={'Farmer'} />
        <Service value={'Service Provider'} />
        <Service value={'Input Seller'} />
        <Service value={'Investor'} />
        <Service value={'Direct-to-Farm Buyer'} />
        <Service value={'Processing Storage'} />
    </form>
  )
}
