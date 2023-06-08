import React from "react";
import style from "@/styles/confirmation.module.scss";
import envelop from "../assets/envelop.png";
import Image from "next/image";

export default function Confirmation() {
    return (
        <div className={style.confirmation_card}>
            <Image src={envelop} alt="envelop" className={style.envelop_img} />
            <hr className={style.line} />
            <div className={style.confirmation_message}>
                <p className={style.message_text}>
                    A Confimation Link was sent to your email. 
                    <br/>
                    <br/>
                    Please confirm your email to finish setting up.
                </p>
                <p className={style.message_detail}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </div>
            <button type='button' className={style.closebutton} >Close</button>
        </div>
    )
}