import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <main className="justify-center items-center mt-40 md:px-52 px-6">
        <h1 className="text-3xl font-bold">About Devfolio Hub</h1>
        <h2 className="text-xl font-semibold">Why devFolio?</h2>
        <p>
          DevFolio is one stop place for developers in south africa(currently),
          developers showcase their portofolio sites.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
