import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import WorksList from "../components/WorksList/WorksList";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WorksList />
    </Box>
  );
};

export default Home;