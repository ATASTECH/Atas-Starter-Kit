// components/OGMeta.tsx
import Head from 'next/head';

const OGMeta = () => {
  return (
    <Head>
      <meta property="og:title" content="Atas Starter Kit" />
      <meta property="og:description" content="A starter kit for Next.js projects by AtasTech." />
      <meta property="og:image" content="/public/og.png" />
      <meta property="og:url" content="https://atas-starter.vercel.app" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Atas Starter Kit" />
      <meta name="twitter:description" content="A starter kit for Next.js projects by AtasTech." />
      <meta name="twitter:image" content="/public/og.png" />
    </Head>
  );
};

export default OGMeta;
