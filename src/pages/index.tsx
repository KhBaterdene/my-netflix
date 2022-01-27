import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Banner from "components/banner";
import NavBar from "components/nav/navbar";
import SectionCards from "components/card/section-cards";
import { getVideos } from "lib/videos";

export const getServerSideProps = async (ctx: any) => {
  const videos = await getVideos();

  return {
    props: {
      disneyVideos: videos,
    },
  };
};

const Home: NextPage = ({ disneyVideos }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner
        title="Clifford the red dog"
        subtitle="Very Cute Dog"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards
          title="this is section title"
          videos={disneyVideos}
          size="medium"
          shouldScale
        />
      </div>
    </div>
  );
};

export default Home;
