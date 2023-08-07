// import styles from "@/styles/dropdown.module.scss";
import React from "react";
import Select from "react-select";
import styles from "@/styles/dropdowntemplate.module.scss";

const DropdownTemplate = ({ labeltext, options }) => {
  // const options = [
  //     { value: 'DoLO', label: 'Document of land Ownership' },
  //     { value: 'UB', label: 'Utility Bill' },
  //     { value: 'PoF', label: 'Picture of Farm' },
  //     { value: 'O4', label: 'Option 4' }
  //   ]
  // const placeholder = [
  //     {value:'placeholder', label: 'Select a Document Type'}
  // ]
  //const options = { options };
  //const placeholder = { placeholder };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p>{labeltext}</p>
      </div>
      <div className={styles.options}>
        <Select defaultValue={options[0]} options={options} />
      </div>
    </div>
  );
};

export default DropdownTemplate;
