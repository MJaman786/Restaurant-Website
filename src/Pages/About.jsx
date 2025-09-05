import { HomeAbout } from "./Home";
import "./Style.css"

export const AboutHeader = () => {
    return (
        <>
            <div className="container-fluid mt-5 about-header">
                <div className="card text-center mb-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export const AboutResto = () => {
    return (
        <>
            <div className="container-fluid px-lg-5 about-resto">
                <div className="card mb-3">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <img src="/img/about2.png" className="img-fluid rounded-start w-100" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body mt-lg-5">
                                <p className="card-desc">About Our Restaurant</p>
                                <h5 className="card-title">We Provide Good Food For Your Family!</h5>
                                <p className="card-text">Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer</p>
                                <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.</p>
                                <button className="card-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const BookTable = () => {
    return (
        <>
            <div className="container-fluid bookTable">
                <div className="card text-center">
                    <div className="card-body">
                        <p className="card-text">About Our Restaurant</p>
                        <h5 className="card-title">Book A Table</h5>
                    </div>
                </div>
                <div className="container-fluid form-container">
                    <div className="row g-3 w-100">
                        <div className="col-lg-3 col-md-6">
                            <input type="number" className="form-control inp-filed" placeholder="Enter no. Persons" aria-label="First name" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <input type="date" className="form-control inp-filed" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <input type="time" className="form-control inp-filed" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <button className="form-control inp-filed" >Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function About() {
    return (
        <>
            <AboutHeader />
            <AboutResto />
            <BookTable />
            <HomeAbout />
        </>
    );
}