import { Link } from "react-router-dom";
import './Home.css';
import Trust from "./trust";
export default function Home(){
    return(
        <>
        <div className="container-fluid" style={{backgroundImage:'url("./Images/one.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'500px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="d-flex">
                            <ul className="d-flex justify-content-between ms-0 mt-3">
                                <li><Link className="lk"><i className="bi bi-telephone-fill"></i> +123-456-7890</Link></li>
                                <li><Link className="lk"><i className="bi bi-envelope-fill"></i> info@somedomain.com</Link></li>
                            </ul>
                            <ul className="d-flex justify-content-between ms-auto me-3 mt-3">
                                <li><Link className="lk"><i className="bi bi-facebook"></i></Link></li>
                                <li><Link className="lk"><i className="bi bi-twitter"></i></Link></li>
                                <li><Link className="lk"><i className="bi bi-instagram"></i></Link></li>
                                <li><Link className="lk"><i className="bi bi-linkedin"></i></Link></li>
                            </ul>
                            <button className="btn btn-primary mt-1"><i className="bi bi-calculator"></i> GET A QUOTE</button>
                        </div>
                        <nav className="navbar navbar-expand-sm bg-light rounded mt-2" style={{opacity:'0.8'}}>
                            <img src="./Images/logo.jpg" className="navbar-brand ms-2 rounded-pill" alt="log" height="55px" width='60px'/><span style={{fontSize:'30px',fontWeight:'bold'}}>amiso</span>                   
                            <button type="button" className="navbar-toggler" data-bs-toggle='collapse' data-bs-target="#colaps">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="colaps">
                                <ul className="navbar-nav ms-auto me-1">
                                    <li className="nav-item"><Link to='/' className="nav-link">HOME</Link></li>
                                    <li className="nav-item"><Link to='/' className="nav-link">ABOUT</Link></li>
                                    <li className="nav-item"><Link to='/' className="nav-link">PAGES</Link></li>
                                    <li className="nav-item"><Link to='/' className="nav-link">GALLERY</Link></li>
                                    <li className="nav-item"><Link to='/' className="nav-link">BLOG</Link></li>
                                    <li className="nav-item"><Link to='/' className="nav-link">CONTACT</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row text-light">
                <div className="col-sm-12">
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        {/* <!-- The slideshow/carousel --> */}
                        <div className="container ps-5 pt-1">
                            <div className="row">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <h6>RENEW YOURL LOOK</h6> 
                                        <h1>A TRADITION OF <br/> QUALITY CLEANING</h1>
                                        <button type="button" className="btn btn-info mt-3 text-light" style={{borderRadius:'0.5px solid white'}}>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Left and right controls/icons --> */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button> 
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-info p-5">
    
                    <div className="container pt-5 Hrel">
                        <div className="row text-center Habs" style={{marginBottom:'50px'}}>
                            <div className="col-sm-3 me-5 bg-light">
                                <img src="./Images/hand.jpg" alt="hand"/>
                                <h6 className="text-dark">Professional Cleaning</h6>
                                <p className="text-secondary">Housekeeping is responsible for minor security in hotel Ecosystem for Food and Cleaner through.</p>
                            </div>
                            <div className="col-sm-3 me-5 ms-5 bg-light">
                                <img src="./Images/brush.jpg" alt="brush"/>
                                <h6 className="text-dark">Fast and efficient</h6>
                                <p className="text-secondary">Our Aim is to Keep the House Clean - Your Aim Will Help! the through Digital Innovation World Summit.</p>
                            </div>
                            <div className="col-sm-3 ms-5 bg-light">
                                <img src="./Images/home.jpg" alt="home"/>
                                <h6 className="text-dark">Renew your look</h6>
                                <p className="text-secondary">Both of us take a lot of time in getting cleaned and beautified clean Home. Professional Service.</p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'100px'}}>
                            <div className="col-sm-3 mt-5 me-5">
                                <h2>A Clean House is a Happy Place!</h2>
                                <p className="text-light">Washla has met the demands of a growing world.</p>
                            </div>
                            <div className="col-sm-3 ms-5 me-5 text-light">
                                <p><span style={{fontSize:'25px'}}>W</span>ashla customers has a tremendous opportunity to answer the call of lgoistic needs across the globe.
                                Has 26 affiliated state soybean associations representing 30 soybean-producing state.</p>
                            </div>
                            <div className="col-sm-3 ms-5 ps-4 text-light">
                                <p>World's leading non-asset-based supply chaing manangement companies, we design and implement companies, we design and implement industry-leading. We specialise in intelligent & effective search and believes in the power of partnerships to grow business.</p>
                            </div>
                        </div>
                    </div>
        </div>
        <Trust />
        </>
    )
};