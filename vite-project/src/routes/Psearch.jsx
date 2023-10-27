import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import AboutImg from "../assets/img.jpg"
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm'

function Contact (){
    return (
        <>
        <Navbar/>
        <Hero cName="hero-mind" heroImg={AboutImg} 
        title="Touts les vols"
         btnClass="hide"> </Hero>
   <Footer> </Footer>
        </>
    )

}

export default Contact;