import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import AboutImg from "../assets/sg.jpg"
import Footer from '../components/Footer';
import SignInForm from "../routes/SginForm"

function Reserver (){
    return (
        <>
               <Navbar/>
        <Hero cName="hero-mind" heroImg={AboutImg} 
       
         btnClass="hide"> </Hero>
         <br />
         <SignInForm></SignInForm>
         <br />
<Footer></Footer>
        </>
    )

}

export default Reserver;