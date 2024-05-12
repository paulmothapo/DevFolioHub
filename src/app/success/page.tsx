
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import PortfolioForm from '../../components/PortfolioForm';

const Success: React.FC = () => {
  return (
    <>
      <Head>
        <title>Success - DevFolioHub</title>
        <meta name="description" content="Submit your developer portfolio on DevFolioHub" />
      </Head>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Success</h1>
        
      </main>
    </>
  );
};

export default Success;