import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/6.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData";
import "./DestinationStyle.css"

const Destination = ()=>{
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within o time frame</p>
            <DestinationData
            className="first-des" heading="Taal Volcano, Batangas"
            text="paragraphes" 
            img1={Mountain1}
            img2={Mountain2}></DestinationData>

        <DestinationData 
        className="first-des-reverse" 
        heading="Mt.Daguldul, Batangas"
            text="paragraphes" 
            img1={Mountain3}
            img2={Mountain4}></DestinationData>
        </div>

    )
}

export default Destination;