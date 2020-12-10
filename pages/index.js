/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Heading1, Body1, Caption } from '../components/typography';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Link href="/works/css_pattern">
          <a>3種のCSS</a>
        </Link>
        <section>
          <Heading1>見出しだぞう！</Heading1>
          <Body1>本文だぞう！</Body1>
          <Caption>キャプションだぞう！</Caption>
          <div
            sx={{
              fontSize: 11,
              fontWeight: 'bold',
              color: 'primary',
            }}
          >
            sx Propキター！
          </div>
          <div sx={{ bg: 'purple.9', borderRadius: 4, p: 7, my: 7 }}>
            <div
              sx={{
                fontSize: [2, 4, 8],
                textAlign: 'center',
                color: 'purple.0',
              }}
            >
              わっはっは
            </div>
          </div>
        </section>
        <section>
          <p>
            Hello, I'm <strong>Masaya</strong>. I'm a Web designer, director.
            You can caontact me on{' '}
            <a href="https://twitter.com/sugawaramasaya" target="_blank">
              Twitter
            </a>
            .
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
