/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Heading1, Body1 } from '../components/typography';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} / About</title>
      </Head>
      <Container>
        <Heading1>About</Heading1>
        <Body1>ワイや</Body1>
      </Container>
    </Layout>
  );
};

export default About;
