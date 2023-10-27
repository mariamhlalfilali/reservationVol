import "./ReserverStyle.css"

function ReserverForm(){
    return(
        <div className="from-container">
            
            <form>
            <div class="mb-3">
                <input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name"/>
            </div>
            <div class="mb-3">
                <input type="number"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tel"/>
            </div>
            <div class="mb-3">
                <input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ville"/>
            </div>
            <div class="mb-3">
                <input type="text"  id="exampleInputPassword1" placeholder="destination"/>
            </div>
            <div class="mb-3">
                <input type="date"  id="exampleInputPassword1" placeholder="destination"/>
            </div>
            <div class="mb-3">
                <input type="date"  id="exampleInputPassword1" placeholder="destination"/>
            </div>
           
           
            <button type="submit" class="btn btn-primary">Reserver</button>
</form>
        </div>
    )
}

export default ReserverForm;