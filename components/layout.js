/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Header from './header';

export const siteTitle = 'Next.jsの勉強を生中継するブログ';

const Layout = ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="デザイナーがNext.jsの勉強を生中継するブログ"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {home ? <Header home /> : <Header />}
      <main>{children}</main>
      {!home && (
        <Container>
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default Layout;
