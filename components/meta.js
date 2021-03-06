import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and markdown.`}
      />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
}
