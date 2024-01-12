import { useState, useEffect } from "react";
import Service from "../service-instance/Service";
import serviceStyles from "@/styles/serviceform.module.scss";

interface Group {
  url: string;
  name: string;
}

export default function ServiceForm({ setService }: any) {
  // const [service, setService] = useState<string>('');
  // console.log("service", service);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

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

  return (
    <div className={serviceStyles.form} onSubmit={handleSubmit}>
      {/* <Service value={'Farmer'} setService={setService} />
        <Service value={'Service Provider'} setService={setService} />
        <Service value={'Input Seller'} setService={setService} />
        <Service value={'Investor'} setService={setService} />
        <Service value={'Direct-to-Farm Buyer'} setService={setService} />
        <Service value={'Processing Storage'} setService={setService} /> */}
      {groups.map((group: Group, index: number) => (
        <div key={index}>
          {/* <input
              type="radio"
              id={group.name}
              name="group"
              value={group.name}
              onChange={handleGroupChange}
            />
            <label htmlFor={group.name}>{group.name}</label> */}
          <Service value={group.name} setService={setService} />
        </div>
      ))}
    </div>
  );
}
