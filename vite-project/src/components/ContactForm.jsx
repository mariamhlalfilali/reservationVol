import "./ContactStyle.css"

function ContactForm(){
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form>
            <div class="mb-3">
                <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
            </div>
            <div class="mb-3">
                <input type="password"  id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <textarea name="" id="" cols="30" rows="4" placeholder="Message "></textarea>
           
            <button type="submit" class="btn btn-primary">Send Message</button>
</form>
        </div>
    )
}

export default ContactForm;