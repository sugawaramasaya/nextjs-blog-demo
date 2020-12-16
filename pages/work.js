/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Heading1, Body1 } from '../components/typography';

const Work = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} / Work</title>
      </Head>
      <Container>
        <Heading1>Work</Heading1>
        <Body1>ここやで</Body1>
      </Container>
    </Layout>
  );
};

export default Work;
