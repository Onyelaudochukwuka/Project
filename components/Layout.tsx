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
          
          <Navbar />
          {children}
          <Footer />

      </>
  )
}

export default Layout;