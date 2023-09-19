import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
      <div className="row footerrow">
        <div className="col-lg-3 col-12 d-lg-block d-none">
          <h5 className="firstList">
            <a>Women</a>
          </h5>
          <ul>
            <li>
              <a>Dresses</a>
            </li>
            <li>
              <a>Pants</a>
            </li>
            <li>
              <a>Skirts</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12 d-lg-block d-none">
          <h5 className="firstList">
            <a>Men</a>
          </h5>
          <ul>
            <li>
              <a>Shirts</a>
            </li>
            <li>
              <a>Pants</a>
            </li>
            <li>
              <a>Hoodies</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12 d-lg-block d-none">
          <h5 className="firstList">
            <a>Kids</a>
          </h5>
        </div>
        <div className="col-lg-3 col-12 d-lg-block d-none">
          <h5 className="firstList">
            <a>Links</a>
          </h5>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="row footerrow">
          <div className="col-lg-3 col-12 d-lg-none d-block">
            <h5 className="firstList">
              <a>Women</a>
            </h5>
            <ul>
              <li>
                <a>Dresses</a>
              </li>
              <li>
                <a>Pants</a>
              </li>
              <li>
                <a>Skirts</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 d-lg-none d-block">
            <h5 className="firstList">
              <a>Men</a>
            </h5>
            <ul>
              <li>
                <a>Shirts</a>
              </li>
              <li>
                <a>Pants</a>
              </li>
              <li>
                <a>Hoodies</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 d-lg-none d-block">
            <h5 className="firstList">
              <a>Kids</a>
            </h5>
          </div>
          <div className="col-lg-3 col-12 d-lg-none d-block">
            <h5 className="firstList">
              <a>Links</a>
            </h5>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <hr />
          <p style={{fontWeight: "bolder;"}}>Copyright &copy; dreYESitt 2022-23</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
