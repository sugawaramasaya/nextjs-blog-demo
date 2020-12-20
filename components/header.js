/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Container>
        <Flex sx={{ my: 5 }}>
          <Link href="/">
            <a className={styles.navLink}>Hello</a>
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Link href="/work">
            <a className={styles.navLink}>Work</a>
          </Link>
          <Link href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
