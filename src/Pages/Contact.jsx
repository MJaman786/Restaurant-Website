import "../Pages/Style.css"

export default function Contact() {
    return (
        <>
            <div className="container-fluid contactContainer">
                <h1 className="ms-3">Contact Us</h1>
            </div>
            <div className="container-fluid contactContain">
                <div className="row">
                    <div className="col-12">
                        <h5 className="contact-header">Get in touch</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 ms-lg-3">
                        {/* form */}
                        <form action="">
                            {/* text-area */}
                            <div className="row my-2">
                                <div className="col-12">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Enter Message"></textarea>
                                </div>
                            </div>
                            {/* name and email */}
                            <div className="row my-2">
                                <div className="col-12 col-md-6 my-2">
                                    <input type="text" className="form-control" placeholder="Your Name" aria-label="First name" />
                                </div>
                                <div class="col-12 col-md-6 my-2">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Last name" />
                                </div>
                            </div>
                            {/* subject */}
                            <div className="row my-2">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Enter Subject" aria-label="Last name" />
                                </div>
                            </div>
                            {/* button */}
                            <div className="row my-3">
                                <div className="col-12">
                                    <button type="button" className="btn px-5 py-3">SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-4">

                    </div>
                </div>
            </div>
        </>
    );
}