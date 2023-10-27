import { Component } from "react";
import "./NavbarStyle.css";
import { MeunItems } from "./MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component{
    state= {clicked:false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fa-solid fa-x": "fa-solid fa-bars"}></i>     
                </div>

                <ul className={this.state.clicked ?  "nav-menu active":"nav-menu"}>
                    {MeunItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}> <i className={item.icon}></i>{item.title} </Link>
                            </li>
                        )
                    })}
                    <button ><Link to="/signup" style={{textDecoration: "none",color:"white"}}>Connexion</Link></button>
                    
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;