import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import Trip from '../components/Trip';
import vol from '../assets/vol.jpg'
import Search from '../routes/Search'


function Home (){
    
    return (
        <>
         <Navbar/>
        <Hero cName="hero" heroImg={vol} 
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/" btnClass="show">
            
                
                </Hero>
                <br />
<Search></Search>
        <Destination/>
        <Trip></Trip>
        <Footer> </Footer>
        </>
    )

}

export default Home;