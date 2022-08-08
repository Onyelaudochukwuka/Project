import { AppProps } from "next/app";
import Head from "next/head";
import React, { FC, PropsWithChildren } from 'react';
import { Footer, Navbar } from "./index";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
      <div className="bg-[#053F5C]">
          
          <Head>
              <title>Ero</title>
          </Head> 
          
          <Navbar />
          {children}
          <Footer />

      </div>
  )
}

export default Layout;