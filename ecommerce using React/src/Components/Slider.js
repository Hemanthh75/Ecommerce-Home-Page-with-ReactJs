import React from "react";
import './Slider.css'
import Hoodie from '../Images/Men Clothes/Hoodie.jpg';
import Shirt from '../Images/Men Clothes/Shirt.jpg';
import Sweatshirt from '../Images/Men Clothes/Sweatshirt.jpg';
import Tshirt from '../Images/Men Clothes/Tshirt.jpg';
import Bluedress from '../Images/Women Clothes/Bluedress.jpeg';
import Lavdendardress from '../Images/Women Clothes/Lavendar dress.jpg';
import Pinkdress from '../Images/Women Clothes/Pinkdress.jpg';
import Yellowdress from '../Images/Women Clothes/Yellowdress.jpeg';
import Blueboy from '../Images/Kids Clothes/Blueboy.jpg';
import pinkgirl from '../Images/Kids Clothes/pinkgirl.jpg';
import Whitegirl from '../Images/Kids Clothes/Whitegirl.jpg';
import yellowboy from '../Images/Kids Clothes/yellowboy.jpg';


const Slider = () => {
    return(
        <div className="slider">
            <div>
        <h1 className="featured">Featured Products</h1> <br/> <br/>                                   


        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">                         
          <div className="carousel-inner">

              
              <div className="carousel-item active">
                <div className="row">   
                  
                    
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none "> 
                        <div className="card text-center" >                                                                 
                            <img src={Hoodie} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Black & White Hoodie</h5>
                              <h5>15$</h5>
                              <p className="card-text">Black and white Hoodie for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">                                                                                                    
                    <div className="card text-center" >                                                                 
                            <img src={Shirt} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Red Shirt</h5>
                              <h5>18$</h5>
                              <p className="card-text">Red full sleeve shirt for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">                                                                                                     
                    <div className="card text-center" >                                                                 
                            <img src={Sweatshirt} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Green T-shirt</h5>
                              <h5>12$</h5>
                              <p className="card-text">Green T-shirt for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">                                                                                                        
                    <div className="card text-center" >                                                                 
                            <img src={Tshirt} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Blue Sweatshirt</h5>
                              <h5>18$</h5>
                              <p className="card-text">Blue Sweatshirt for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none "> 
                    <div className="card text-center" >                                                                 
                            <img src={Hoodie} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Black & White Hoodie</h5>
                              <h5>15$</h5>
                              <p className="card-text">Black and white Hoodie for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none ">                                                                                                   
                    <div className="card text-center" >                                                                 
                            <img src={Shirt} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Red Shirt</h5>
                              <h5>18$</h5>
                              <p className="card-text">Red full sleeve shirt for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-none d-block "> 
                    <div className="card text-center" >                                                                 
                            <img src={Hoodie} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Black & White Hoodie</h5>
                              <h5>15$</h5>
                              <p className="card-text">Black and white Hoodie for men</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              
              <div className="carousel-item">                                                                                            
                <div className="row">

                  
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Bluedress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Yellow Dress</h5>
                              <h5>20$</h5>
                              <p className="card-text">Yellow Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">                                  
                    <div className="card text-center" >                                                                 
                            <img src={Lavdendardress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Pink Dress</h5>
                                <h5>25$</h5>
                              <p className="card-text">Pink Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Pinkdress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Lavendar Dress</h5>
                              <h5>20$</h5>
                              <p className="card-text">Lavendar Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Yellowdress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Blue Dress</h5>
                              <h5>22$</h5>
                              <p className="card-text">Blue Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Bluedress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Yellow Dress</h5>
                              <h5>20$</h5>
                              <p className="card-text">Yellow Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none ">                                  
                    <div className="card text-center" >                                                                 
                            <img src={Lavdendardress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Pink Dress</h5>
                                <h5>25$</h5>
                              <p className="card-text">Pink Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-none d-block ">
                    <div className="card text-center" >                                                                 
                            <img src={Bluedress} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Yellow Dress</h5>
                              <h5>20$</h5>
                              <p className="card-text">Yellow Dress for women</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              
              <div className="carousel-item">                                                                                             
                <div className="row">

                  
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Blueboy} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Blue shirt</h5>
                              <h5>10$</h5>
                              <p className="card-text">Blue shirt for boys</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={pinkgirl} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Pink Dress</h5>
                              <h5>11$</h5>
                              <p className="card-text">Pink Dress for girls</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Whitegirl} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Yellow shirt</h5>
                              <h5>10$</h5>
                              <p className="card-text">Yellow shirt for boys</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-block d-md-none d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={yellowboy} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">White Dress</h5>
                              <h5>12$</h5>
                              <p className="card-text">White Dress for girls</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={Blueboy} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Blue shirt</h5>
                              <h5>10$</h5>
                              <p className="card-text">Blue shirt for boys</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-block d-none ">
                    <div className="card text-center" >                                                                 
                            <img src={pinkgirl} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Pink Dress</h5>
                              <h5>11$</h5>
                              <p className="card-text">Pink Dress for girls</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-12 d-lg-none d-md-none d-block ">
                    <div className="card text-center" >                                                                 
                            <img src={Blueboy} className="card-img-top"/>
                            <div className="card-body">
                              <h5 className="card-title">Blue shirt</h5>
                              <h5>10$</h5>
                              <p className="card-text">Blue shirt for boys</p>
                              <a href="Cart.html" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

          </div>
          <div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Slider;