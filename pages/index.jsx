import Head from "next/head";
import { Fragment } from "react";

import { ContainerCarrosel } from "../components/Container/ContainerCarrosel";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Carrosel com react e styled components</title>
      </Head>

      <ContainerCarrosel />

      <script src="https://kit.fontawesome.com/77cd38f0c6.js" defer ></script>
    </Fragment>
    
  )
}
