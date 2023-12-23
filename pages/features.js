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
         Activ The BEst CHoice To Run Ur Product.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
     
        </>
    )
    }

export default Features;