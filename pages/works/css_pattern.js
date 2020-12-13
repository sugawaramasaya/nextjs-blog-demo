/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { Heading1, Body1, Caption } from '../../components/typography';

const CSSPattern = ({}) => {
  return (
    <Layout>
      <Head>
        <title>3種のCSS</title>
      </Head>
      <article>
        <Container>
          <Styled.h1>3種のCSS</Styled.h1>
          <h1 className={utilStyles.heading2Xl}>ここは素のCSS</h1>
          <div className={utilStyles.lightText}>ここも素のCSS</div>
          <Heading1>
            ここはTheme UIのコンポーネントをベースに、themeとsx
            Propで作成した独自コンポーネント
          </Heading1>
          <Body1>
            <Styled.a href="https://www.google.co.jp/">
              ここはTheme UIのStyled componentでスタイル定義
            </Styled.a>
            <br />
            ここはTheme UIのコンポーネントをベースに、themeとsx
            Propで作成した独自コンポーネント
          </Body1>
          <Caption>
            ここもTheme UIのコンポーネントをベースに、themeとsx
            Propで作成した独自コンポーネント
          </Caption>
        </Container>
      </article>
    </Layout>
  );
};

export default CSSPattern;
