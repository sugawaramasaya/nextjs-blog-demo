/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import { Heading1, Body1, Caption } from '../../components/typography';

export default function IsetanChristmasCampaign2011({}) {
  return (
    <Layout>
      <Head>
        <title>ISETAN CHRISTMAS CAMPAIGN 2011</title>
      </Head>
      <article>
        <Container>
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>2011</div>
          <Heading1>ISETAN CHRISTMAS CAMPAIGN 2011</Heading1>
          <Body1>
            2D素材のコンポジットと横スクロールによるパララックス効果で2.5Dの空間を再現。全12話はそれぞれにストーリーとアニメーションが付いているほか、音楽と効果音を個別に持たせ、各話を読み進めるうちに音響が重なっていく仕様としました。さらに横スクロールの特性を活かし、移動位置で左右の音量を変化させることで、サイトがより立体的に感じられるようになっています。なお横スクロールは最後までスクロールすると自然と最初の位置まで戻ってくる無限スクロールになっています（逆も同様）。​​​​​​​
          </Body1>
          <Caption>
            担当｜Webディレクション、デザイン、実装、企画
            <br />
            アートディレクション｜社内
            <br />
            イラスト｜社外
          </Caption>
        </Container>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
