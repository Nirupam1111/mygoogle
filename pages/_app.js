import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

// function MyApp({ Component, pageProps }) {
  
//   return (
//     <>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
