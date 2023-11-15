import { Component } from "react";
import "./Navbarstyles.css";
//for defining state we have to change function into class and
// component cannot be empty , so we can erase the brackets//
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    //render is used because we have extended class into component // 
    render() {
        return (
            <>
                <nav>
                    <h1 id="logo"> RV </h1>
                    <div>
                        <ul id="navlinks" className={this.state.clicked ? "#navlinks active" : "#navlinks"}>
                            <li><a className="active" href="index.html">Home</a></li>
                            <li><a href="index.html">Services</a></li>
                            <li><a href="index.html">Blog</a></li>
                            <li><a href="index.html">About</a></li>
                            <li><a href="index.html">Contact</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;