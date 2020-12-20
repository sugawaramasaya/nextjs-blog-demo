/** @jsx jsx */
import { jsx, Container, Grid, Box, AspectRatio, Text } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Caption } from '../components/typography';
import Link from 'next/link';
import Image from 'next/image';

const ThumbImage = ({ src, alt, href }) => (
  <AspectRatio ratio={1}>
    <Link href={href}>
      <a>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={768}
          height={768}
          sx={{ objectFit: 'cover' }}
        />
      </a>
    </Link>
  </AspectRatio>
);

const Thumb = ({ src, alt, href, title }) => (
  <Box>
    <ThumbImage src={src} alt={alt} href={href} />
    <Text
      sx={{
        fontSize: 1,
        fontWeight: 'bold',
        mt: 3,
        mb: 0,
      }}
    >
      <Link href={href}>
        <a style={{ textDecoration: 'none' }}>{title}</a>
      </Link>
    </Text>
  </Box>
);

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Grid gap={7} columns={[1, 3, 4]}>
          <Thumb
            src="/images/mountains.jpg"
            alt="Mountains"
            href="/works/css_pattern"
            title="あああああああ"
          />
          <Thumb
            src="/images/photo.jpg"
            alt="photo"
            href="/works/css_pattern"
            title="いいいい"
          />
          <Thumb
            src="/images/aeta_teaser_3/05.png"
            alt="Picture of the author"
            href="/works/css_pattern"
            title="ううううう"
          />
          <Thumb
            src="/images/dummy.jpg"
            alt="Picture of the author"
            href="/works/css_pattern"
            title="えええええええええ"
          />
          <Thumb
            src="/images/dummy.jpg"
            alt="Picture of the author"
            href="/works/css_pattern"
            title="おおおおおお"
          />
          <Thumb
            src="/images/dummy.jpg"
            alt="Picture of the author"
            href="/works/css_pattern"
            title="かかかかかかかかかかか"
          />
          <Thumb
            src="/images/dummy.jpg"
            alt="Picture of the author"
            href="/works/css_pattern"
            title="きききき"
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
