import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import AboutImg from "../assets/10.jpg"
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import ReserverForm from '../components/ReserverForm';


function Reserver (){
    return (
        <>
               <Navbar/>
        <Hero cName="hero-mind" heroImg={AboutImg} 
        title="Reserver meilleure vol"
         btnClass="hide"> </Hero>
   
    <ReserverForm></ReserverForm>
    <Footer></Footer>
        </>
    )

}

export default Reserver;