
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import PortfolioForm from '../../components/PortfolioForm';

const Submit: React.FC = () => {
  return (
    <>
      <Head>
        {/* <title>Submit Your Portfolio - DevFolioHub</title> */}
        <meta name="description" content="Submit your developer portfolio on DevFolioHub" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* <h1 className="text-3xl font-bold mb-4">Submit Your Portfolio</h1> */}
        <PortfolioForm />
      </main>
    </>
  );
};

export default Submit;