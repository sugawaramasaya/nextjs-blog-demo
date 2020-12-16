/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'SUGAWARA Masaya';

const Header = ({ home }) => {
  return (
    <header>
      <Container>
        <Flex sx={{ my: 5 }}>
          <Link href="/">
            <a className={styles.navLink}>Hello</a>
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
          <Link href="/work">
            <a className={styles.navLink}>Work</a>
          </Link>
          <Link href="/blog">
            <a className={styles.navLink}>Blog</a>
          </Link>
        </Flex>
      </Container>
      {home && (
        <>
          <Container>
            <Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
              <img
                src="/images/profile.jpg"
                className={`${styles.homeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </Flex>
          </Container>
        </>
      )}
    </header>
  );
};

export default Header;
