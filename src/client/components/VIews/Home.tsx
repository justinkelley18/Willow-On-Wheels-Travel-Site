import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom"

const Home: React.FC<HomeProps> = (props) => {
    return (
        <>
            <div className="imgContainer">
                <img src="./assets/HomeImg1.JPG" className="HomeImg1" />
                <img src="./assets/HomeImg2.JPG" className="HomeImg2" />
                <img src="./assets/HomeImg3.JPG" className="HomeImg3" />
            </div>
            <div className="jmbHome jumbotron-fluid">
                <div className="homeJMB container">
                    <h3 className="display-4">FOLLOW OUR JOURNEY HERE </h3>
                    <p className="lead">Hello Everyone, Welcome to WIllow On Wheels ! Explore our site where we document our bus build and travels !</p>
                    <div>____</div>
                    <p className="lead">Read about our build below and also check out our socials !</p>
                </div>
            </div>
            <div>
                <div className="taggbox-outer">
                    <iframe src="https://widget.taggbox.com/67575" className="taggbox-container"></iframe>
                    {/* <iframe src="https://widget.taggbox.com/first-widget-70578" className="taggbox-container"></iframe> */}
                </div>
                <div className="card-1">
                    <div className="row no-gutters">
                        <div className="col-sm-7">
                            <img className="card-img" src="./assets/HomeImg3.JPG" alt="Blog card img" />
                        </div>
                        <div className="col-sm-5">
                            <div className="card-body">
                                <h5 className="card-title">Insulating Our Rig</h5>
                                <p className="card-text">Content</p>
                                <NavLink
                                    exact
                                    className="btn btn-primary"
                                    activeClassName="btn btn-primary"
                                    to="/blog1"
                                >READ ABOUT IT
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card-2">
                    <div className="row no-gutters">
                        <div className="col-sm-7">
                            <img className="card-img" src="./assets/HomeImg3.JPG" alt="Blog card img" />
                        </div>
                        <div className="col-sm-5">
                            <div className="card-body">
                                <h5 className="card-title">Our Solar Journey</h5>
                                <p className="card-text">Content</p>
                                <NavLink
                                    exact
                                    className="btn btn-primary"
                                    activeClassName="btn btn-primary"
                                    to="/blog2"
                                >READ ABOUT IT
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-3">
                    <div className="row no-gutters">
                        <div className="col-sm-7">
                            <img className="card-img" src="./assets/HomeImg3.JPG" alt="Blog card img" />
                        </div>
                        <div className="col-sm-5">
                            <div className="card-body">
                                <h5 className="card-title">Deck Build </h5>
                                <p className="card-text">Content</p>
                                <NavLink
                                    exact
                                    className="btn btn-primary"
                                    activeClassName="btn btn-primary"
                                    to="/blog3"
                                >READ ABOUT IT
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <iframe src="https://widget.taggbox.com/first-widget-70578" className="taggbox-container"></iframe> */}


            </div>

        </>
    )
};

interface HomeProps { }
export default Home;