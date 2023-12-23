import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faqq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>ActivNodes</title>
        <meta
          name="description"
          content="Game Server Hosting"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        We Use this section to highlight our popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to Order your Website">
        This section is to highlight a promo or demo video for 
        ordering a product from ZoroX Technologies 
      </SectionTitle>
      <Video />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;