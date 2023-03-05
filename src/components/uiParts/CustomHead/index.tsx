import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  // ogpTitle: string;
  // ogpDescription: string;
  // ogpImagePath: string;
  // twitterDescription: string;
  // twitterTitle: string;
  // twitterImagePath: string;
};

/** メタ情報コンポーネント */
const CustomHead = ({
  title,
  description,
}: // ogpTitle,
// ogpDescription,
// ogpImagePath,
// twitterTitle,
// twitterDescription,
// twitterImagePath,
Props): JSX.Element => (
  <Head>
    <title key='title'>{`${title} | MyFridge`}</title>
    <meta name='description' content={description} />
    {/* <meta name='og:title' content={ogpTitle} />
    <meta name='og:description' content={ogpDescription} />
    <meta
      name='og:image'
      content={`${process.env.SITE_URL as string}/${ogpImagePath}`}
    />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={twitterTitle} />
    <meta name='twitter:description' content={twitterDescription} />
    <meta
      name='twitter:image'
      content={`${process.env.SITE_URL as string}/${twitterImagePath}`}
    /> */}
  </Head>
);

export default CustomHead;
