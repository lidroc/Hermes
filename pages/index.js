import Container from "@/components/container";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
        </Head>
        <Container>
          <main>Hello</main>
        </Container>
      </Layout>
    </>
  );
}
