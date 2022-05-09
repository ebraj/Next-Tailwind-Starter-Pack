import Head from "next/head";
import React from "react";

import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Project title</title>
        <meta name="description" content="Project Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full justify-between min-h-screen">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
