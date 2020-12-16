/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Link href="/works/css_pattern">
          <a>3種のCSS</a>
        </Link>
      </Container>
    </Layout>
  );
};

export default Home;
