import { useState } from "react";
import "../Pages/Style.css"

export const ServicesProvide = () => {
    return (
        <>
            <div className="container-fluid servicesProvide px-lg-5">
                <div className="card text-center mx-auto">
                    <div className="card-body">
                        <p className="card-text">Servicees We Offer</p>
                        <h5 className="card-title">Our Best Services</h5>
                    </div>
                </div>
                <div className="container-fluid servicesProvideCont">
                    <div className="row">
                        {/* service 1 */}
                        <div className="col-12 col-lg-4 col-md-6 p-2">
                            <div className="card">
                                <img src="/img/icon1.png" className="card-img-top img-fluid" alt="..." style={{ height: "80px", objectFit: "contain" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Best Chef</h5>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>
                        {/* service 2 */}
                        <div className="col-12 col-lg-4 col-md-6 p-2">
                            <div className="card card-active">
                                <img src="/img/icon2.png" className="card-img-top img-fluid" alt="..." style={{ height: "80px", objectFit: "contain" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Quality Food</h5>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>
                        {/* service 3 */}
                        <div className="col-12 col-lg-4 col-md-6 p-2">
                            <div className="card">
                                <img src="/img/icon1.png" className="card-img-top img-fluid" alt="..." style={{ height: "80px", objectFit: "contain" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Perfect cook</h5>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const SlidderWrapper = () => {
    return (
        <>
            <div className="card text-center m-0">
                <div className="card-body">
                    <p className="card-text">$25</p>
                    <h5 className="card-title">Delicious Food</h5>
                    <p className="card-desc">Ut enim ad minim veniam quis nostr.</p>
                    <a className="btn">Order Now</a>
                </div>
            </div>
        </>
    );
}

const MenuCard = ({ img1, img2, img3, img4 }) => {
    return (
        <div className="container-fluid food-container p-0" style={{ overflow: "hidden" }}>
            <div className="row g-0">
                {/* column 1 */}
                <div className="col-12 col-lg-4 col-md-6 slide-wrapper">
                    <img src={img1} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                    <SlidderWrapper />
                </div>
                {/* column 2 */}
                <div className="col-12 col-lg-4 col-md-6 slide-wrapper" style={{ zIndex: "1" }}>
                    <img src={img2} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                    <SlidderWrapper />

                </div>
                {/* column 3 */}
                <div className="col-12 col-lg-4 col-md-12">
                    <div className="row h-100">
                        <div className="col-12 slide-wrapper">
                            <img src={img3} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                            <SlidderWrapper />
                        </div>
                        <div className="col-12 slide-wrapper" style={{ overflow: "hidden" }}>
                            <img src={img4} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                            <div className="card text-center m-0">
                                <SlidderWrapper />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function Menu() {

    let myImagesList = [
        // special
        {
            id: 0,
            img1: "/img/gallery1.png",
            img2: "/img/gallery2.png",
            img3: "/img/gallery3.png",
            img4: "/img/gallery4.png"
        },
        // lunch
        {
            id: 1,
            img1: "/img/gallery2.png",
            img2: "/img/gallery1.png",
            img3: "/img/gallery4.png",
            img4: "/img/gallery3.png"
        },
        // breakfirst
        {
            id: 2,
            img1: "/img/gallery1.png",
            img2: "/img/gallery2.png",
            img3: "/img/gallery3.png",
            img4: "/img/gallery4.png"
        },
        // dinner
        {
            id: 3,
            img1: "/img/gallery2.png",
            img2: "/img/gallery1.png",
            img3: "/img/gallery4.png",
            img4: "/img/gallery3.png"
        }
    ];

    const [menuState, setMenu] = useState({
        special: true,
        lunch: false,
        breakfirst: false,
        dinner: false
    });


    function handelMenuChange(menuType) {
        switch (menuType) {
            case "special":
                setMenu({ special: true, lunch: false, breakfirst: false, dinner: false })
                break;
            case "lunch":
                setMenu({ special: false, lunch: true, breakfirst: false, dinner: false })
                break;
            case "breakfirst":
                setMenu({ special: false, lunch: false, breakfirst: true, dinner: false })
                break;
            case "dinner":
                setMenu({ special: false, lunch: false, breakfirst: false, dinner: true })
                break;
            default:
                break;
        }
    }

    // console.table(menuState)
    return (
        <>
            <div className="container-fluid menu-container">
                <div className="card text-center mb-3">
                    <div className="card-body">
                        <p className="card-text">Our Offered Menu</p>
                        <h5 className="card-title">Some Trendy And Popular<br /> Courses Offerd</h5>
                        <div classNameName="container btn-container pt-2 pt-md-5 pt-sm-4 pb-2">
                            <a onClick={() => handelMenuChange("special")} className="btn btn-special">Special</a>
                            <a onClick={() => handelMenuChange("lunch")} className="btn btn-lunch">Lunch</a>
                            <a onClick={() => handelMenuChange("breakfirst")} className="btn btn-breakfirst">BreakFirst</a>
                            <a onClick={() => handelMenuChange("dinner")} className="btn btn-dinner">Dinner</a>
                        </div>
                    </div>
                </div>
                {
                    (menuState.special) ? <MenuCard img1={myImagesList[0].img1} img2={myImagesList[0].img2} img3={myImagesList[0].img3} img4={myImagesList[0].img4} /> :
                        (menuState.lunch) ? <MenuCard img1={myImagesList[1].img1} img2={myImagesList[1].img2} img3={myImagesList[1].img3} img4={myImagesList[1].img4} /> :
                            (menuState.breakfirst) ? <MenuCard img1={myImagesList[2].img1} img2={myImagesList[2].img2} img3={myImagesList[2].img3} img4={myImagesList[2].img4} /> :
                                (menuState.dinner) ? <MenuCard img1={myImagesList[3].img1} img2={myImagesList[3].img2} img3={myImagesList[3].img3} img4={myImagesList[3].img4} /> : null
                }
            </div>
            <ServicesProvide />
        </>
    );
}