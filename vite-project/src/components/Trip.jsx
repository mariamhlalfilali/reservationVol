import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../assets/9.jpg"
import Trip2 from "../assets/10.jpg"
import Trip3 from "../assets/12.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Map</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading ="Trip in Indonesia"
                text="paragraphes"></TripData>

            <TripData 
                image={Trip2}
                heading ="Trip in Indonesia"
                text="paragraphes"></TripData>

            <TripData 
                image={Trip3}
                heading ="Trip in Indonesia"
                text="paragraphes"></TripData>
            </div>
        </div>
    )
}

export default Trip;