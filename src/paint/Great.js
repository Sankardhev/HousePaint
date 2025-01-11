import Team from "./Ourteam";

export default function Great(){
    return(
        <>
        <div className="container-fluid text-light" style={{backgroundImage:'url(./Images/three.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div className="row">
                    <h5 className="text-center" style={{marginTop:'80px'}}>WHY CHOOSE US</h5>
                    <h1 className="text-center text-dark">Our Great Service</h1>
                    <p className="text-center">Restoring the beauty and freshness of all your upholstered fabrics and take the work out of housework for you.</p>
                    {/* carousel */}
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">

                        {/* <!-- Indicators/dots --> */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active rounded-circle" style={{width:'10px',height:'10px'}}></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1" className="rounded-circle" style={{width:'10px',height:'10px'}}></button>
                        </div>
                        
                        {/* <!-- The slideshow/carousel --> */}
                            <div className="carousel-inner p-5">
                                <div className="carousel-item active p-5">
                                    <div className="row">
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Hclean.jpg" alt="Hclean" className="rounded"/>
                                            <h4>Home Cleaning</h4>
                                            <p>Homes and thoroughly launcher them between usage. We give our teams the accusantium doloremque laudantium.</p>
                                        </div>
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Wclean.jpg" alt="Wclean" className="rounded"/>
                                            <h4>Windows Cleaning</h4>
                                            <p>We are closely monitoring national, state and local health agencies for the most recent developments.</p>
                                        </div>
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Oclean.jpg" alt="Oclean" className="rounded"/>
                                            <h4>Office Cleaning</h4>
                                            <p>Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases.</p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="carousel-item p-5">
                                    <div className="row">
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Hclean.jpg" alt="Hclean" className="rounded"/>
                                            <h4>Home Cleaning</h4>
                                            <p>Homes and thoroughly launcher them between usage. We give our teams the accusantium doloremque laudantium.</p>
                                        </div>
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Wclean.jpg" alt="Wclean" className="rounded"/>
                                            <h4>Windows Cleaning</h4>
                                            <p>We are closely monitoring national, state and local health agencies for the most recent developments.</p>
                                        </div>
                                        <div className="col-sm-3 m-4 bg-info" style={{width:'330px'}}>
                                            <img src="./Images/Oclean.jpg" alt="Oclean" className="rounded"/>
                                            <h4>Office Cleaning</h4>
                                            <p>Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases.</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                    </div>
                </div>
        </div>
        <Team />
        </>
    )
};