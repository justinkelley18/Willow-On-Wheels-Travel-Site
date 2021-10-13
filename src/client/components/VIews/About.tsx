import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const About: React.FC<AboutProps> = (props) => {
  return (
    <>
      <div className="AboutUs">
        <div>
          <img src="./assets/AboutUsImg.PNG" className="AboutUsImg" />
          <div className="contactInfo ">
            <h1>Contacts and socials</h1>
          </div>
          <h3>___</h3>
          <div className="row">
            <div className="col1">
              <h3>Justin Kelley</h3>
              <h6>Web Developer/Designer</h6>
              <h6>____</h6>
              <a href="https://justinjkelley.com/" target="_blank">
                View my site
              </a>
            </div>
            <div className="col2">
              <h3>Emma Gilbert</h3>
              <h6> Fine Artist </h6>
              <h6>____</h6>
              <a href="http://emmagilbertart.weebly.com" target="_blank">
                View my shop
              </a>
            </div>
            <div className="abFiller">
              *Website built and brought to you by Justin Kelley. Everything is
              coded using a combination of JavaScript, ReactJs, NodeJs, and Css.
              This is the first of many upcoming projects and changes for me.
              This site will be updated consistently. Keep an eye out for
              updates and changes. For website inquires visit the site link
              above.
            </div>
          </div>
        </div>
        <div className=" describeUs">
          <h1>A little about us </h1>
        </div>
        <div className="row paraContent">
          <h6>Hello Everyone,</h6>
          <br />
          <h6>
            We are Justin and Emma. We are so excited to have a site up and
            running for you guys to view and keep up with our shuttle bus
            journey. We are nine-teen years old and beginning a journey of a
            lifetime. We are both from Alabama and wanted to take the initiative
            young to leave our hometowns and explore the country. Emma is a Fine
            Artist with a wide range of abilities and skills. Justin is Web
            Developer looking to expand his portfolio. We started dating in
            highschool and have been dating for almost 4 years now. After
            struggles to decide if college or work life was the right path for
            either of us we came accross bus life and fell in love with the
            idea. Together we laid out the pros and cons and after many setbacks
            we bought our beautiful shuttle bus Willow and have been living in
            it full time since August 2021. Our goal with bus life is to leave
            our hometown and gain self independence and see what travel has to
            offer us. We researched how bus life can save you up to 80% on many
            expenses like rent and utilities and decided this is something we
            would like to do to start off our adult lives and save money that
            can be used for something greater in the future. We both have an
            attraction for all things outdoors and all things out of the state
            of Alabama. Id magnam eaque commodi accusamus et beatae
            perspiciatis, ipsa illum atque, facere vitae nobis dolorem dolor
            aspernatur expedita suscipit natus at tempora officia molestiae
            repellat provident laborum. Cumque, architecto amet. Minus itaque
            assumenda culpa debitis voluptatibus neque quo vitae dolor delectus
            tenetur voluptatem temporibus autem, ducimus officia cumque a.
            Reiciendis minima ad perferendis corporis doloremque nam deleniti
            natus quia aliquid? Neque sed repellendus nulla omnis impedit
            explicabo officia accusantium hic, excepturi unde suscipit accusamus
            dignissimos consequatur quam dolore reiciendis optio soluta? Ea
            perspiciatis, ex reprehenderit in cupiditate at officiis quis! Sit
            vitae esse saepe unde? Quam dolores, quasi voluptatem consectetur
            non ullam porro et illo voluptatibus dignissimos, nihil, asperiores
            praesentium omnis? Quod provident quidem tenetur. Ex odio similique
            mollitia molestiae! Vero libero aperiam iste odit magni labore quia,
            aliquid, nemo numquam assumenda commodi consequuntur doloribus
            itaque quidem ullam quo voluptates. Nam minus deleniti quis
            doloribus enim quae, rerum delectus. Laboriosam.
          </h6>
        </div>
      </div>
    </>
  );
};

interface AboutProps {}
export default About;
