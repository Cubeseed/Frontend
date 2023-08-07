import React, { useState } from "react";
import styles from "@/styles/InputWrap.module.scss";

const InputWrap = ({ labeltext, placeholder }) => {
  const [input, setInput] = useState("");
  return (
    <div className={styles.container}>
      <label htmlFor="input-text">{labeltext}</label>
      <input
        type="text"
        id="input-text"
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputWrap;
