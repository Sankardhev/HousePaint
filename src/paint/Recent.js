import End from "./End";
import './Recent.css';
export default function Recent(){
    return(
        <>
        <div className="container Rrel">
            <h6 className="text-center">WHY CHOOSE US</h6>
            <h1 className="text-dark text-center">Recent News</h1>
            <p className="text-center">We specialise in inteligent & effective Search and believes in the power of partnerships to grow business.</p>
            
                <div className="row mt-5">
                    {/* <div className="col-sm-3 m-4 p-5"> */}
                    <div className="col-sm-3 p-2 ms-4 me-5 mobile" style={{width:'300px'}}>
                        <div className="Imgrel">
                        <img src='./Images/seven.jpg' alt="seven" style={{width:'100%'}}/>
                        <p className="bg-primary text-light Imgabs" style={{zIndex:1,width:'50px'}}><span style={{fontSize:'25px'}}>12</span><br/>Nov</p>
                        </div>
                    </div>
                    {/* <div className="col-sm-3 m-4 p-5"> */}
                    <div className="col-sm-3 p-2 ms-4 me-5 mobile" style={{width:'300px'}}>
                        <div className="Imgrel">
                        <img src='./Images/eight.jpg' alt="eight" style={{width:'100%'}}/>
                        <p className="bg-primary text-light Imgabs" style={{zIndex:1,width:'50px'}}><span style={{fontSize:'25px'}}>11</span><br/>Nov</p>
                        </div>
                    </div>
                    {/* <div className="col-sm-3 m-4 p-5"> */}
                    <div className="col-sm-3 p-2 ms-2 me-2 mobileImg mobileImg1" style={{width:'300px'}}>
                        <div className="Imgrel">                
                        <img src='./Images/two.jpg' alt="nine" style={{height:'420px',width:'100%'}}/>
                        <p className="bg-primary text-light Imgabs" style={{zIndex:1,width:'50px'}}><span style={{fontSize:'25px'}}>10</span><br/>Nov</p>
                        </div>
                    </div>
                </div>
                <div className="row p-4 Rabs" style={{marginTop:'-80px'}}>
                    <div className="col-sm-3 p-2 ms-4 me-5 text-secondary bg-light" style={{width:'260px',borderBottom:'3px solid skyblue'}}>
                        <h6>CLEANING</h6>
                        <h3 className="text-dark">Temporary Ruling Issued</h3>
                        <p>Washla has met the demands of a growing world cleaning tremendous.</p>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="./Images/Oface.jpg" alt="Oface" className="rounded-pill" style={{width:'50px',height:'50px'}}/>
                            </div>
                            <div className="col-sm-9">
                                <h6 className="text-dark">Martha Smith</h6>
                                <p>Washla CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-2 me-5 text-secondary bg-light" style={{width:'260px',borderBottom:'3px solid skyblue',marginLeft:'60px'}}>
                        <h6>CLEANING</h6>
                        <h3 className="text-dark">The Expands California</h3>
                        <p>welcomed and every sed ut perspiciatisunde omnis iste natus.</p>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="./Images/Tface.jpg" alt="Tface" className="rounded-pill" style={{width:'50px',height:'50px'}}/>
                            </div>
                            <div className="col-sm-9">
                                <h6 className="text-dark">Laura Jones</h6>
                                <p>Accounting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 p-2 ms-5 me-2 text-secondary bg-light" style={{width:'260px',borderBottom:'3px solid skyblue'}}>
                        <h6>CLEANING</h6>
                        <h3 className=" text-dark">Temporary Ruling Issued</h3>
                        <p>Washla has met the demands of a growing world. The Cleaning.</p>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="./Images/THface.jpg" className="rounded-pill" alt="THface" style={{width:'50px',height:'50px'}}/>
                            </div>
                            <div className="col-sm-9">
                                <h6 className="text-dark">Matt Ryan</h6>
                                <p>Lawyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <End />
        </>
    )
};