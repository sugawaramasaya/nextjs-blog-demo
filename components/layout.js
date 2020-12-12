/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'SUGAWARA Masaya';

const NavLink = ({ href, title, mr }) => (
  <Link href={href}>
    <a sx={{ fontSize: [1, 4], fontWeight: 'bold', mr: mr }}>{title}</a>
  </Link>
);

export const siteTitle = 'Next.jsの勉強を生中継するブログ';

export default function Layout({ children, home }) {
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
      <header>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <NavLink href="/" title="Hello" />
          <div sx={{ mx: 'auto' }} />
          <NavLink href="/blog" title="Blog" mr={6} />
          <NavLink href="/about" title="About" />
        </Container>
      </header>

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
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
}
