import serviceStyles from "@/styles/serviceform.module.scss"
import Service from "../service-instance/Service"

export default function ServiceForm({ setService }: any) {
  // const [service, setService] = useState<string>('');
  // console.log("service", service);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className={serviceStyles.container}>
      <div className={`${serviceStyles.heading} mb-4 mt-8`}>
        <h1 className="signup-text">Firstly, who are you?</h1>
        <p>Select the option that best describes you.</p>
      </div>

      <div className={serviceStyles.form} onSubmit={handleSubmit}>
        <Service value={"Farmer"} setService={setService} />
        <Service value={"Service Provider"} setService={setService} />
        <Service value={"Input Seller"} setService={setService} />
        <Service value={"Investor"} setService={setService} />
        <Service value={"Direct-to-Farm Buyer"} setService={setService} />
        <Service value={"Processing Storage"} setService={setService} />
      </div>
    </div>
  )
}
