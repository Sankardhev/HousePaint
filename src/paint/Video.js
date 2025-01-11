import Recent from './Recent';
import './video.css';

export default function Video(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center text-light Vrel">
                        <video src="./Images/Video.mp4" controls style={{width:'100%'}}/>
                        <div className="Tabs" style={{width:'300px'}}>
                            <span>Cleaning your worries Away</span>
                            <h1>Need Help With Cleaning?</h1>
                            <button type="button" className="btn btn-primary text-light mt-2">Request Call Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container crel">
            <div className="row bg-light text-secondary rabs p-3">
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="./Images/Nemoji.jpg" alt="emoji" style={{width:'50px',height:'50px'}}/>
                        </div>
                        <div className="col-sm-9" style={{borderRight:'0.5px solid lightgrey'}}>
                            <span className="text-dark"><b>385</b></span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="./Images/House clean.jpg" alt="house clean" style={{width:'50px',height:'50px'}}/>
                        </div>
                        <div className="col-sm-9" style={{borderRight:'0.5px solid lightgrey'}}>
                            <span className="text-dark"><b>842</b></span>
                            <p>Houses Cleaned</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="./Images/Award.jpg" alt="award" style={{width:'50px',height:'50px'}}/>
                        </div>
                        <div className="col-sm-9" style={{borderRight:'0.5px solid lightgrey'}}>
                            <span className="text-dark"><b>489</b></span>
                            <p>Awards Received</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="./Images/classclean.jpg" alt="Glassclean" style={{width:'50px',height:'50px'}}/>
                        </div>
                        <div className="col-sm-9">
                            <span className="text-dark"><b>1344</b></span>
                            <p>Glass Cleaned</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Recent />
        </>
    )
};