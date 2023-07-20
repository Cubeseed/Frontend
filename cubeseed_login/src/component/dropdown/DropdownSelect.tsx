import styles from '@/styles/dropdown.module.scss'
import React from 'react'
import Select from 'react-select'



const DropdownSelect = () => {
    const options = [
        { value: 'DoLO', label: 'Document of land Ownership' },
        { value: 'UB', label: 'Utility Bill' },
        { value: 'PoF', label: 'Picture of Farm' },
        { value: 'O4', label: 'Option 4' }
      ]
    const placeholder = [
        {value:'placeholder', label: 'Select a Document Type'}
    ]

  return (
    <div>
         <Select 
         defaultValue={placeholder[0]}
         options={options} 
         />
    </div>
  );
};

export default DropdownSelect;