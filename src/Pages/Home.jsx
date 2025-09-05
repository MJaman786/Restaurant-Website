import "../Pages/Style.css";
import About, { AboutResto } from "./About";
import Menu from "./Menu";

export const HomeAbout = () => {
    return (
        <>
            {/* about */}
            <div className="container-fluid px-3 hero-about">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-12 col-lg-7 col-md-6 flex-container">
                            <div className="card-body">
                                <p className="card-text">Discover Your Test</p>
                                <h5 className="card-title">We Provide Good Food For Your Family!</h5>
                                <p className="card-text">Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.</p>
                                {/* services */}
                                <div className="container services-container">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 col-sm-6 d-flex align-items-center">
                                            <img src="/img/icon1.png" alt="" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                            <p className="services-text">Ut enim ad minim veniam, quis nostrud exer.</p>
                                        </div>
                                        <div className="col-12 col-lg-6 col-sm-6 d-flex align-items-center">
                                            <img src="/img/icon2.png" alt="" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                            <p className="services-text">Ut enim ad minim veniam, quis nostrud exer.</p>
                                        </div>
                                        <div className="col-12 col-lg-6 col-sm-6 d-flex align-items-center">
                                            <img src="/img/icon3.png" alt="" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                            <p className="services-text">Ut enim ad minim veniam, quis nostrud exer.</p>
                                        </div>
                                        <div className="col-12 col-lg-6 col-sm-6 d-flex align-items-center">
                                            <img src="/img/icon1.png" alt="" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                                            <p className="services-text">Ut enim ad minim veniam, quis nostrud exer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-md-6 about-img">
                            <img src="/img/about.png" className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Home() {
    return (
        <>
            <div className="container-fluid hero-container mt-5 py-5">
                <div className="ms-lg-3 card">
                    <div className="card-body">
                        <p className="card-text test-text mb-lg-5">Discover Your Teste</p>
                        <h5 className="card-title mb-lg-5">We belive good food offer great smile</h5>
                        <p className="card-text desc-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br />aliquip ex ea commodo consequat is aute irure.</p>
                        <a href="#" className="btn res-btn py-lg-3 px-lg-5">Resurvation</a>
                    </div>
                </div>
            </div>
            <HomeAbout />
            <Menu />
            <AboutResto/>
        </>
    );
}
