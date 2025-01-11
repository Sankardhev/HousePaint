import Great from './Great';
import './trust.css';
export default function Trust(){
    return(
        <>
        <div className="container text-center text-secondary pt-5">
            <div className="row">
            <h5>WHY CHOOSE US</h5>
            <h1 className="text-dark">Tradition of Trust</h1>
            <p className="mb-5">We specialise in inteligent & effective Search and believes in the power of partnerships to grow business.</p>
                <div className="col-sm-4">
                    <img src="./Images/man.jpg" alt="man" className="p-3 rounded-pill" style={{border:'0.5px solid lightgrey'}}/>
                    <h2 className="text-dark">Professional Team</h2>
                    <p>Our team uses a sanitizing solution to wipe down light switches doorknobs.</p>
                </div>
                <div className="col-sm-4">
                    <img src="./Images/phone.jpg" alt="phone" className="p-3 rounded-pill" style={{border:'0.5px solid lightgrey'}}/>
                    <h2 className="text-dark">24/7 Services</h2>
                    <p>We encourage our customers to let us know in advance of an appointment.</p>
                </div>
                <div className="col-sm-4">
                    <img src="./Images/service.jpg" alt="service" className="p-3 rounded-pill" style={{border:'0.5px solid lightgrey'}}/>
                    <h2 className="text-dark">Servie Guarantee</h2>
                    <p>We are telling our team members to switch out all cleaning cloths and mopheads.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-sm-6 p-0">
                    <img src='./Images/one.jpg' alt='one' style={{width:'102%'}}/>
                </div>
                <div className="col-sm-6 text-secondary bg-light p-5" style={{marginBottom:'-60px',marginTop:'60px',zIndex:'1'}}>
                    <h6>MAID FOR YOU</h6>
                    <h1 className='text-dark'>A Cleaner Place is a Safer Place.</h1>
                    <p>Washla cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.</p>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <img src='./Images/pfclean.jpg' alt='pfclean'/>
                            <h4 className='text-dark'>Professional Cleaning</h4>
                            <p>Housekeeping is responsible for minor security iin hotel.</p>
                        </div>
                        <div className='col-sm-6'>
                            <img src='./Images/fastclean.jpg' alt='fastclean'/>
                            <h4 className='text-dark'>Fast and efficient</h4>
                            <p>Both of us take a lot of time in getting cleaned Clean Home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Great />
        </>
    )
};