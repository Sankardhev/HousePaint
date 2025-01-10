import End from "./End";

export default function Recent(){
    return(
        <>
        <div className="container p-5 m-5 text-center">
            <h6>WHY CHOOSE US</h6>
            <h1 className="text-dark">Recent News</h1>
            <p>We specialise in inteligent & effective Search and believes in the power of partnerships to grow business.</p>
            
                <div className="row mt-5">
                    <div className="col-sm-4">
                        <img src='./Images/seven.jpg' alt="seven" style={{height:'300px',width:'320px'}}/>
                    </div>
                    <div className="col-sm-4">
                        <img src='./Images/eight.jpg' alt="eight" style={{height:'300px',width:'320px'}}/>
                    </div>
                    <div className="col-sm-4">
                        <img src='./Images/two.jpg' alt="nine" style={{height:'300px',width:'320px'}}/>
                    </div>
                </div>

                <div className="row Rabs" style={{marginTop:'-50px'}}>
                    <div className="col-sm-3 p-2 text-secondary ms-4 me-5 bg-light" style={{width:'300px',borderBottom:'3px solid skyblue'}}>
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
                    <div className="col-sm-3 p-2 text-secondary ms-3 me-5 bg-light" style={{width:'300px',borderBottom:'3px solid skyblue'}}>
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
                    <div className="col-sm-3 text-secondary ms-2 me-2 bg-light" style={{width:'300px',borderBottom:'3px solid skyblue'}}>
                        <h6>CLEANING</h6>
                        <h3 className=" text-dark">Temporary Ruling Issued</h3>
                        <p>Washla has met the demands of a growing world. The Cleaning.</p>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="./Images/THface.jpg" className="rounded-pill" alt="THface" style={{width:'50px',height:'50px'}}/>
                            </div>
                            <div className="col-sm-9">
                                <h2 className="text-dark">Matt Ryan</h2>
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