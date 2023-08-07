import React from "react";
import Link from "next/link";

const ButtonTemplate = ({
  containerclass,
  buttonclass,
  buttontext,
  redirection,
}) => {
  return (
    <div className={containerclass}>
      <Link href={redirection} legacyBehavior>
        <button className={buttonclass}>{buttontext}</button>
      </Link>
    </div>
  );
};

export default ButtonTemplate;
