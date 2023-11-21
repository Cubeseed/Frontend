import React from 'react';
import Link from 'next/link';
import styles from '@/styles/marketplaceprofile.module.css';


const ProfileLinks: React.FC<{ userId?: string }> = ({ userId = '' }) => {
  return (
    <div className={styles.accountLinks}>
      <Link href={`/dashboard/marketplace_profile/${userId}/myaccountform`}>My Account</Link>
      <Link href={`/dashboard/marketplace_profile/${userId}/myaccountform`}>My Business</Link>
      <Link href={`/dashboard/marketplace_profile/${userId}/myaccountform`}>My Document</Link>
    </div>
  );
};

export default ProfileLinks;
