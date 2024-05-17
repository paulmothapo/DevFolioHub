import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";
import React from "react";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="justify-center items-center mt-40 md:px-52 px-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <h2 className="text-xl font-semibold">
          Get in touch with the team behind all the magic
        </h2>
        <div className=" ">
          <h4>our email:{" "}</h4>
          <p className="text-gray-300" >{" "}info@devfoliohub.com</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
