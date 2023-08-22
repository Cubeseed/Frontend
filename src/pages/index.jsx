// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>

      {/* Link to the registration page */}
      <Link href="/register" legacyBehavior>
        <a>Go to Registration Page</a>
      </Link>
    </div>
  );
};

export default HomePage;
