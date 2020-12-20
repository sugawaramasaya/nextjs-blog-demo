/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui';

const Footer = () => {
  return (
    <footer sx={{ bg: 'black' }}>
      <Container>
        <Text sx={{ color: 'white', py: 5 }}>footer</Text>
      </Container>
    </footer>
  );
};

export default Footer;
