/** @jsx jsx */
import { jsx, Container, Grid, Box } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        {/* <Grid gap={[0, 7]} columns={[1, 2, 4]}>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            ああああああああ
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            いいいい
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            ううううう
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            えええええええええ
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            おおおおおお
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            かかかかかかかかかかか
          </Box>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            きききき
          </Box>
        </Grid> */}
        <Link href="/works/css_pattern">
          <a>3種のCSS</a>
        </Link>
      </Container>
    </Layout>
  );
};

export default Home;
