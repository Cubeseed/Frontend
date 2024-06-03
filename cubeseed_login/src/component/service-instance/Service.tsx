"use client" //use client side rendering when using state
import { useSignUpContext } from "@/context/signup"
import serviceStyles from "@/styles/service.module.scss"
import Image from "next/image"
import { useRef } from "react"
import icon from "../../../public/assets/agriculture.svg"

type value = {
  value: string
  setService?: React.Dispatch<React.SetStateAction<string>>
}

export default function Service({ value, setService }: value) {
  // const [isChecked, setIsChecked] = useState<boolean>(false); // unused state
  const { choice, setChoice } = useSignUpContext()

  const radioRef = useRef<HTMLInputElement>(null)

  const selectOption = () => {
    if (setService) setService(value)
    if (value === radioRef.current?.value) {
      radioRef.current?.checked === true
      setChoice(value)
    } else {
      // setIsChecked(false);
      // radioRef.current?.checked === false;
    }
    // radioRef.current?.checked === true;
  }

  // useEffect(()=>{
  //     setIsChecked(!isChecked)
  //     radioRef.current?.checked === true
  //     console.log(radioRef.current?.value)
  // },[isChecked, selectOption])

  return (
    <div className={serviceStyles.service} onClick={selectOption}>
      <section className={serviceStyles.description}>
        <Image src={icon} alt={""} className={serviceStyles.icon} />
        <section>
          <h3>{value}</h3>
          <p>Suporting text from lorem ipsum</p>
        </section>
      </section>
      <input
        type="radio"
        id="radio"
        name="service"
        checked={choice === value}
        value={value}
        readOnly={true}
        ref={radioRef}
      />
    </div>
  )
}
