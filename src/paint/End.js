import { Link } from "react-router-dom";
import './end.css';
export default function End(){
    return(
        <>
        <div className="container-fluid End" style={{backgroundColor:'lightgrey'}}>
            <div className="container pt-5 text-secondary">
                <div className="row" style={{borderBottom:'0.5px solid grey'}}>
                    <div className="col-sm-3 p-3">
                        <h1 className="text-dark"><img src='./Images/logo.jpg' alt="logo" style={{height:'50px',width:'50px'}}/>amiso</h1>
                        <p>Washla customers has a tremendous opportunity to answer the call of logistic.</p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-dark">Get In Touch</h4>
                        <p>8273 NW 56th ST Miami, Florida, 33195 United States</p>
                        <p>some@amiso.come</p>
                        <p>052 5401 3322</p>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-dark">Quick Links</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Home</p>
                                <p>About</p>
                                <p>Services</p>
                                <p>Team</p>
                            </div>
                            <div className="col-sm-6">
                                <p>FAQ</p>
                                <p>Contact Us</p>
                                <p>Gallery</p>
                                <p>Blogs</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="text-dark">Our Newsletter</h4>
                        <p>Subscribe to our newsletter to receive the latest news about our services.</p>
                        <div className="input-group">
                            <input type="email" id="email" name="email" placeholder="Your email address" style={{width:'150px',border:'none'}}/>
                            <input type="submit" className="bg-primary rounded text-light" value='SIGN UP' style={{border:'none',fontSize:'12px'}}/>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 text-secondary">
                    <div className="col-sm-6">
                        <p><i className="bi bi-c-circle"></i> 2025 amiso all rights reserved.</p>                        
                    </div>
                    <div className="col-sm-6">
                        <ul className="d-flex justify-content-between" style={{float:'right'}}>
                            <li className="ps-3"><Link className="end"><i className="bi bi-facebook"></i></Link></li>
                            <li className="ps-3"><Link className="end"><i className="bi bi-twitter"></i></Link></li>
                            <li className="ps-3"><Link className="end"><i className="bi bi-instagram"></i></Link></li>
                            <li className="ps-3"><Link className="end"><i className="bi bi-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#home" style={{textAlign:'end',textDecoration:'none'}}><i className="bi bi-arrow-up-circle fs-1"></i></a>
        </div>
        </>
    )
};