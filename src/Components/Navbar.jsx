import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/img/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{boxShadow:"none"}}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav align-items-center justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link active">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/menu" className="nav-link active">Menu</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu mt-lg-5">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link active">Contact</NavLink>
                                </li>
                                <button type="button" className="btn online-btn">Order Online</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}