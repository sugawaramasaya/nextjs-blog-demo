/** @jsx jsx */
import { jsx, Container, Grid, Flex, Box } from 'theme-ui';
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
        以下はFlexbox（Rebassとちがい実質Gridじゃないとレイアウトできないっぽい）
        <Flex sx={{ flexWrap: 'wrap', alignItems: 'center', mx: -5 }}>
          <Box sx={{ flex: 1, bg: 'background', px: 5 }}>
            <Image
              src="/images/mountains.jpg"
              alt="Mountains"
              width={2800}
              height={1900}
            />
            ああああああああ
          </Box>
          <Box sx={{ flex: 1, bg: 'background', px: 5 }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            いいいい
          </Box>
          <Box sx={{ flex: 1, bg: 'background', px: 5 }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            ううううう
          </Box>
          <Box sx={{ flex: 1, bg: 'background', px: 5 }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            えええええええええ
          </Box>
          <Box sx={{ flex: 1, bg: 'background', px: 5 }}>
            <Image
              src="/images/dummy.jpg"
              alt="Picture of the author"
              width={768}
              height={768}
            />
            おおおおおお
          </Box>
        </Flex>
        以下はGrid
        <Grid gap={[0, 7]} columns={[1, 3, 4]}>
          <Box sx={{ bg: 'background' }}>
            <Image
              src="/images/mountains.jpg"
              alt="Mountains"
              width={2800}
              height={1900}
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
        </Grid>
        <Link href="/works/css_pattern">
          <a>3種のCSS</a>
        </Link>
      </Container>
    </Layout>
  );
};

export default Home;
