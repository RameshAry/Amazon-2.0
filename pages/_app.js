import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "./app/store";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {loading && <Component {...pageProps} />}
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
