import Recent from './Recent';
import './video.css';

export default function Video(){
    return(
        <>
        <div className="contianer-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center text-light Vrel">
                        <video src="./Images/Video.mp4" controls style={{width:'100%'}}/>
                        <div className="Tabs">
                            <span>Cleaning your worries Away</span>
                            <h1>Need Help With Cleaning?</h1>
                            <button type="button" className="btn btn-primary text-light mt-2">Request Call Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row crel">
            <div className="row bg-light text-secondary rabs" style={{width:'1050px'}}>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="./Images/Nemoji.jpg" alt="emoji"/>
                        </div>
                        <div className="col-sm-7">
                            <span className="text-dark"><b>385</b></span>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="./Images/House clean.jpg" alt="house clean"/>
                        </div>
                        <div className="col-sm-7">
                            <span className="text-dark"><b>842</b></span>
                            <p>Houses Cleaned</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="./Images/Award.jpg" alt="award"/>
                        </div>
                        <div className="col-sm-7">
                            <span className="text-dark"><b>489</b></span>
                            <p>Awards Received</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="./Images/classclean.jpg" alt="Glassclean"/>
                        </div>
                        <div className="col-sm-7">
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