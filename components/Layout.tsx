import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, PropsWithChildren } from 'react';
import { Footer, Navbar } from "./index";

const Layout = ({ children }: PropsWithChildren<any>) => {
    return (
      <>
          
          <Head>
              <title>Ero</title>
          </Head> 
          
      <div className="bg-[#053F5C] w-screen overflow-x-hidden min-h-screen">
          <Navbar />
          {children}
          <Footer />
     </div>
    </>
  )
}

export default Layout;