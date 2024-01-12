"use client"; //use client side rendering when using state
import Image from "next/image";
import icon from "../../../public/assets/agriculture.svg";
import serviceStyles from "@/styles/service.module.scss";
import {
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSignUpContext } from "@/context/signup";

type value = {
  value: string;
  setService?: React.Dispatch<React.SetStateAction<string>>;
};

interface Group {
  url: string;
  name: string;
}

export default function Service({ value, setService }: value) {
  // const [isChecked, setIsChecked] = useState<boolean>(false); // unused state
  const { choice, groupurl, setChoice, setGroupurl } = useSignUpContext();

  const [groups, setGroups] = useState([]);

  // get all groups
  useEffect(() => {
    fetch(
      "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userauth/groups/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGroups(data.results.slice(1));
      })
      .catch((err: Error): void => {
        console.log("Error message:", err.message);
      });
  }, []);

  //const radioRef = useRef<InputHTMLAttributes<HTMLInputElement>>(null)
  const radioRef = useRef<HTMLInputElement>(null);

  const selectOption = () => {
    if (value === radioRef.current?.value) {
      radioRef.current?.checked === true;
      const selectedUrl = (
        groups.find((group: Group) => group.name === value) as Group | undefined
      )?.url;
      setChoice(value);
      setGroupurl(selectedUrl as string);
    }
    // else {
    //   // setIsChecked(false);
    //   // radioRef.current?.checked === false;
    // }
    // // radioRef.current?.checked === true;
  };

  const selectOption2 = () => {
    const selectedGroup = groups.find((group: Group) => group.name === value);
    const selectedUrl = (selectedGroup as Group | undefined)?.url ?? undefined;

    // Update state only if it's different from the current state
    if (choice !== value) {
      setChoice(value);
    }

    if (groupurl !== selectedUrl) {
      setGroupurl(selectedUrl || "");
    }
  };

  // useEffect(()=>{
  //     setIsChecked(!isChecked)
  //     radioRef.current?.checked === true
  //     console.log(radioRef.current?.value)
  // },[isChecked, selectOption])

  const radioId = `radio-${value}`;

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  useEffect(() => {
    console.log(groupurl);
  }, [groupurl]);

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
        id={radioId}
        name="service"
        checked={choice === value}
        value={value}
        //onChange={selectOption}
        readOnly={true}
        ref={radioRef}
      />
    </div>
  );
}
