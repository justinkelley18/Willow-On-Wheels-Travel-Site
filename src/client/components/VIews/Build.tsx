import * as React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom'

const Build: React.FC<BuildProps> = (props) => {


    return (
        <>
            <div className='card-deck strectched-link buildCard'>

                <div className="card" >
                    <img className="card-img-top buildImg" src="./assets/HomeImg1.JPG" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Insulating Our Rig</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink
                            exact
                            className="btn btn-dark"
                            activeClassName="text font-weight-bold"
                            to="/blog1"
                        >READ ABOUT IT</NavLink>
                        {/* <a href="#" className="btn btn-dark">See Profile</a> */}
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top buildImg" src="./assets/HomeImg1.JPG" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Our Solar Journey</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink
                            exact
                            className="btn btn-dark"
                            activeClassName="text font-weight-bold"
                            to="/blog2"
                        >READ ABOUT IT</NavLink>
                        {/* <a href="#" className="btn btn-dark">See Profile</a> */}
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top buildImg" src="./assets/HomeImg1.JPG" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Deck Build</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink
                            exact
                            className="btn btn-dark"
                            activeClassName="text font-weight-bold"
                            to="/blog3"
                        >READ ABOUT IT</NavLink>
                        {/* <a href="#" className="btn btn-dark">See Profile</a> */}
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top buildImg" src="./assets/HomeImg1.JPG" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Plumbing</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink
                            exact
                            className="btn btn-dark"
                            activeClassName="text font-weight-bold"
                            to="/blog4"
                        >READ ABOUT IT</NavLink>
                        {/* <a href="#" className="btn btn-dark">See Profile</a> */}
                    </div>
                </div>
                <div className="card" >
                    <img className="card-img-top buildImg" src="./assets/HomeImg1.JPG" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Deck Build</h4>
                        <p className="card-text">Some example text.</p>
                        <NavLink
                            exact
                            className="btn btn-dark"
                            activeClassName="text font-weight-bold"
                            to="/blog5"
                        >READ ABOUT IT</NavLink>
                        {/* <a href="#" className="btn btn-dark">See Profile</a> */}
                    </div>
                </div>
            </div>

        </>
    )
}

interface BuildProps { }
export default Build;