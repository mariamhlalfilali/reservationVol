import "./FooterStyle.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroublesShooting</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;