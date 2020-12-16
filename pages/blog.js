/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Heading1 } from '../components/typography';

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} / Blog</title>
      </Head>
      <Container>
        <Heading1>Blog</Heading1>
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
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
