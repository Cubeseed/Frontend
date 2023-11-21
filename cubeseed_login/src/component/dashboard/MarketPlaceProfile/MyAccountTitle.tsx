import React from 'react';
import styles from '@/styles/marketplaceprofile.module.css';

interface MyAccountTitleProps {
  title: string;
}

const MyAccountTitle: React.FC<MyAccountTitleProps> = ({ title }) => {
  return (
    <div className={styles.accountTile}>
      <p>{title}</p>
      <hr />
    </div>
  );
};

export default MyAccountTitle;
