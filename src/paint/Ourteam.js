import Video from "./Video";

export default function Team(){
    return(
        <>
        <div className="container mt-5 text-center text-secondary">
            <h6>MEET OUR</h6>
            <h1 className="text-dark">Our Team</h1>
            <p>The memeber of our highly experienced team is dedicated to providing you with only the best service we can possibly provide.</p>
            <div className="row">
                <div className="col-sm-12">
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
                                        <div className="col-sm-3 m-4 p-5">
                                            <img src="./Images/four.jpg" alt="four" style={{width:'300px',height:'250px'}}/>
                                            <div className="text-center bg-secondary text-light rounded" style={{width:'300px'}}>
                                                <h6 className="text-dark">Manica Gordon</h6>
                                                <p>House Cleaning</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 m-4 p-5">
                                            <img src="./Images/five.jpg" alt="four" style={{width:'300px',height:'250px'}}/>
                                            <div className="text-center text-light bg-secondary rounded" style={{width:'300px'}}>
                                                <h6 className="text-dark">Lauran Jones</h6>
                                                <p>Cleaner</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3 m-4 p-5">
                                            <img src="./Images/six.jpg" alt="four" style={{width:'300px',height:'250px'}}/>
                                            <div className="text-center text-light bg-secondary rounded" style={{width:'300px'}}>
                                                <h6 className="text-dark">Saran Ryan</h6>
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
                </div>
        </div>
        <Video />
        </>
    )
};