import React from "react";
import Layout from "../layouts/Site.layout";
const App: any = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default App;
