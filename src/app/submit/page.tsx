import React from "react";
import Head from "next/head";
import Header from "@/nav/Header";
import PortfolioForm from "@/form/PortfolioForm";
import Footer from "@/nav/Footer";

const Submit: React.FC = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Submit your developer portfolio on DevFolioHub"
        />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-20">
        <PortfolioForm />
      </main>
      <Footer />
    </>
  );
};

export default Submit;
