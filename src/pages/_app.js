// pages/_app.js


import { UserProvider } from '../context/UserContext'; // Make sure to adjust the path to point to your UserContext file

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
