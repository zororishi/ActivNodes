import Head from "next/head"
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";


const Features = () => {
    return  (
        <>
        <Head>
            <title>Features</title>
        </Head>
        <Navbar />
        <SectionTitle
        pretitle="ZoroX Services Benefits"
        title="Benefits">
         ZoroX The BEst CHoice To order Your Websites in Cheap.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to Order your Website">
        This section is to highlight a promo or demo video for 
        ordering a product from ZoroX Technologies 
      </SectionTitle>
      <Video />
        </>
    )
    }

export default Features;