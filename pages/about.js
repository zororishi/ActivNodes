import Head from "next/head";
import SectionTitle from "../components/sectionTitle";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About = () => {
 return (
    <>
    <Head>
        <title>About</title>
    </Head>
    <Navbar/>
    <SectionTitle pretitle='About'    title="About Us">
        We Are The Best Choice For Customers To Get 
        Their  WebPage RUnning In Cheap.  
        WE Are Team of 5 Peoples 
        Our Main founder Is {'https://github.com/ZoroDev'}
    </SectionTitle>
    <Footer/>
    </>
 )
}

export default About;

