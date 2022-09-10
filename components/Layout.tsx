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
          
      <div className="bg-light w-screen grid GRID overflow-x-hidden min-h-screen gridStuff">
          <Navbar />
          <section className="body min-h-screen">
          {children}
          </section>
          <Footer />
     </div>
    </>
  )
}

export default Layout;