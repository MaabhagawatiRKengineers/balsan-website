import React from "react";
import { Helmet } from "react-helmet-async";

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>BALSAN | Smart Business & Finance Solutions</title>
      <meta
        name="description"
        content="BALSAN offers smart business and finance solutions including accounting, GST, income tax filing, payroll, compliance and advisory for growing companies."
      />
      <meta
        name="keywords"
        content="Accounting services, GST filing, Income tax filing, Compliance services, Payroll processing, Business finance solutions"
      />
      <meta property="og:title" content="BALSAN - Smart Business & Finance Solutions" />
      <meta
        property="og:description"
        content="Professional business and finance solutions for every growing company."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://balsan.vercel.app/" />
    </Helmet>
  );
};

export default SEO;
