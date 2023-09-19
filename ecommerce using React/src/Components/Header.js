import React from "react";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
     return (
        <div id="header">
        <div className="row">                                                                                   
   <div className="col-lg-3">
     <h1>dreYESitt</h1>                                                                                                          
   </div>
                                                                                        
   <div className="col-lg-7">                                                                                                
       <input 
           className="searchbox"
           type="text" 
           placeholder="Product name, Category name etc." />  

       <button 
           type="button" 
           className="btn btn-primary searchbutton" >
           Search
       </button>
   </div>

  
   <div className="col-lg-1">                                                                                                            
   <a href="../Pages/Login.html"><button type="button" className="btn btn-primary loginbutton">Login</button></a>
   </div>

   
   <div className="col-lg-1" >                                                                                                                                     
       <a className="cartbutton" href="../Pages/Cart.html"><FontAwesomeIcon className="carticon" icon={faCartShopping} /></a>
   </div>
</div>

<div className="row" id="navrow">                                                                                                                    
   
   <ul className="nav nav-tabs" id="navbar">
        <li className="nav-item">                                                                                                                          
           <a className="nav-link" href="../Pages/index.html">Home</a>    
        </li>
        <li className="nav-item">                                                                                                                       
           <a className="nav-link" href="../Pages/All Products.html">All Products</a>   
        </li>

       
        <li className="nav-item dropdown dropdownf">                                                                    
           <a className="nav-item dropdown-toggle" data-bs-toggle="dropdown" id="navdd1">Women</a>   
           <ul className="dropdown-menu">
               <li><a className="dropdown-item" href="../Pages/WomenAll.html">All</a></li>
               <li><a className="dropdown-item" href="../Pages/Dresses.html">Dresses</a></li>
               <li><a className="dropdown-item" href="../Pages/PantsW.html">Pants</a></li>
               <li><a className="dropdown-item" href="../Pages/Skirts.html">Skirts</a></li>
           </ul>
        </li>


        <li className="nav-item dropdown">                                                                                                                         
           <a className="nav-item dropdown-toggle" data-bs-toggle="dropdown" id="navdd2" >Men</a>
           <ul className="dropdown-menu">
               <li><a className="dropdown-item" href="../Pages/MenAll.html">All</a></li>
               <li><a className="dropdown-item" href="../Pages/Shirts.html">Shirts</a></li>
               <li><a className="dropdown-item" href="../Pages/PantsM.html">Pants</a></li>
               <li><a className="dropdown-item" href="../Pages/Hoodies.html">Hoodies</a></li>
           </ul>
        </li>
        <li className="nav-item">                                                                                                                                   
           <a className="nav-link" href="../Pages/Kids.html">Kids</a>
        </li>
        <li className="nav-item">                                                                                                                                  
           <a className="nav-link" href="../Pages/Contact.html">Contact</a>
        </li>
   </ul>
</div>
</div>
     )
}

export default Header;