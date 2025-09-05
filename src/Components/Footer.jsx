import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="container-fluid footer-container px-lg-3">
                <div className="card container-fluid ">
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src="/img/logo2_footer.png" className="img-fluid rounded-start pt-5" alt="..." />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <div className="row g-3">
                                    {/* column 1 */}
                                    <div className="col-12 col-lg-3 col-md-6">
                                        <div className="card w-100" >
                                            <div className="card-header">
                                                Navigation
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <NavLink to="/" className="list-group-item">Home</NavLink>
                                                <NavLink to="/" className="list-group-item">Events</NavLink>
                                                <NavLink to="/" className="list-group-item">Testimonial</NavLink>
                                                <NavLink to="/" className="list-group-item">Categories</NavLink>
                                                <NavLink to="/contact" className="list-group-item">Contact</NavLink>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* column 2 */}
                                    <div className="col-12 col-lg-3 col-md-6">
                                        <div className="card w-100">
                                            <div className="card-header">
                                                Useful Links
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <NavLink className="list-group-item">Registration</NavLink>
                                                <NavLink className="list-group-item">Login</NavLink>
                                                <NavLink className="list-group-item">Policy</NavLink>
                                                <NavLink className="list-group-item">Terms & Condition</NavLink>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* column 3 */}
                                    <div className="col-12 col-lg-6 col-md-6">
                                        <div className="card w-100">
                                            <div className="card-header">
                                                Instagram Feed
                                            </div>
                                            <div className="card-body">
                                                <div className="row g-3">
                                                    <div className="col-4"><img src="/img/instagram1.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                    <div className="col-4"><img src="/img/instagram2.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                    <div className="col-4"><img src="/img/instagram3.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                </div>
                                                <div className="row g-3 mt-2">
                                                    <div className="col-4"><img src="/img/instagram4.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                    <div className="col-4"><img src="/img/instagram5.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                    <div className="col-4"><img src="/img/instagram6.png" className="img-fluid w-100" alt="" style={{objectFit:"cover"}}/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}