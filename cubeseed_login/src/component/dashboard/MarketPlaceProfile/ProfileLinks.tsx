import React from 'react';
import Link from 'next/link';
import styles from '@/styles/marketplaceprofile.module.css';

const ProfileLinks: React.FC = () => {
  return (
    <div className={styles.accountLinks}>
      <Link href="/dashboard/marketplace_profile/myaccountform">My Account</Link>
      <Link href="/dashboard/marketplace_profile/mybusinessform">My Business</Link>
      <Link href="/dashboard/marketplace_profile/mydocumentform">My Documents</Link>
    </div>
  );
};

export default ProfileLinks;
