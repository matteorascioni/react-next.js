import Layout from "../components/Layout/Layout";

import "../styles/global.css";
import "../styles/normalize.css";
import "../styles/variables.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
