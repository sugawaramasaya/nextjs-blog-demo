/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import styles from './backToHome.module.css';
import Link from 'next/link';

const backToHome = () => {
  return (
    <Container>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Container>
  );
};

export default backToHome;
