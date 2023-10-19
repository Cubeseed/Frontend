import React from 'react';
import styles from "@/styles/marketplaceprofile.module.css"

const MyAccountTitle = ({ title  }) => {
  return (
    <div className={styles.accountTile}>
      <p>{title}</p>
      <hr />
     </div>
  );
};

export default MyAccountTitle;