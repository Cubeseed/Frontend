import React, { useContext } from "react";
import Congratesms from "@/styles/congratesms.module.scss";
import Image from "next/image";
import PopUp from "@/assets/Group 1000001020.png";
import Button from "./../Button/button";
import Link from "next/link";

export default function CongratulationSms() {
  return (
    <div className={Congratesms.congratsContainer}>
      <div className={Congratesms.circlCon}>
        <div className={Congratesms.circle}></div>
      </div>
      <div className={Congratesms.popImg}>
        <Image src={PopUp} alt="pop-up" height={160} />
      </div>
      <div className={Congratesms.text}>
        <p>Your waybill has been sent to [farmer name] for approval!</p>
        <p>Your waybill status has been set to pending.</p>
      </div>
      <div className={Congratesms.btnWrapper}>
        <Button className={Congratesms.close}>close</Button>

        <Link href="/viewgrn">
          <Button className={Congratesms.view}>View Waybill</Button>
        </Link>
      </div>
    </div>
  );
}
