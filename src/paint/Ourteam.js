import Video from "./Video";

export default function Team(){
    return(
        <>
        {/* carousel */}
        <div className="container-fluid text-center text-secondary p-5">
            <h6>MEET OUR</h6>
            <h1 className="text-dark">Our Team</h1>
            <p>The member of our highly experienced team is dedicated to providing you width only the best service we can possibly provide.</p>
                {/* <!-- Carousel --> */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    {/* <!-- Indicators/dots --> */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    
                    {/* <!-- The slideshow/carousel --> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="./Images/four.jpg" alt='four'/>
                                    <h6 className="text-dark">Monic Gordom</h6>
                                    <p>House Cleaning</p>
                                </div>
                                <div className="col-sm-4">
                                    <img src="./Images/five.jpg" alt="five"/>
                                    <h6 className="text-dark">Lau Jones</h6>
                                    <p>Cleaner</p>
                                </div>
                                <div className="col-sm-4">
                                    <img src="./Images/six.jpg" alt="six" style={{height:'300px'}}/>
                                    <h6 className="text-dark">Sajon Ryan</h6>
                                    <p>House Cleaner</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="./Images/four.jpg" alt='four'/>
                                    <div className="bg-dark">
                                        <h6 className="text-dark">Monic Gordom</h6>
                                        <p>House Cleaning</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <img src="./Images/five.jpg" alt="five"/>
                                    <div className="bg-dark">
                                        <h6 className="text-dark">Lau Jones</h6>
                                        <p>Cleaner</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <img src="./Images/six.jpg" alt="six" style={{height:'300px'}}/>
                                    <div className="bg-dark">
                                        <h6 className="text-dark">Sajon Ryan</h6>
                                        <p>House Cleaner</p>
                                    </div>
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
        <Video />
        </>
    )
};