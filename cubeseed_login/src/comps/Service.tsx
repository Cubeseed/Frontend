import Image from "next/image";
import icon from "@/assets/agriculture.svg";
import serviceStyles from "@/styles/service.module.scss";
import {
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

type value = {
  value: string;
};

export default function Service({ value }: value) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const radioRef = useRef<InputHTMLAttributes<HTMLInputElement>>(null);

  const selectOption = () => {
    setIsChecked(!isChecked);
    radioRef.current?.checked === true;
    console.log(radioRef.current?.value);
  };

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
        checked={isChecked}
        value={value}
        readOnly={true}
        ref={radioRef}
      />
    </div>
  );
}
