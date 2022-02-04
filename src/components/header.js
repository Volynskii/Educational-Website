import React,{useState} from 'react';
import {Link} from "react-router-dom";
import AccountForm from "./account-form";

const Header = () => {

    const [isActiveForm,setIsActiveForm] = useState(false);
    const HandleToggleForm = () => {
   setIsActiveForm((prevState) => !prevState)
    };
    const FormClassName = isActiveForm ? 'active': '';
    return (
       <>
           <header className="header">

               <Link to="/home" className="logo"> <i className="fas fa-lightbulb"/> educa </Link>

               <nav className="navbar">
                   <div id="close-navbar" className="fas fa-times"/>
                   <Link to="/home">home</Link>
                   <Link to="/about">about</Link>
                   <Link to="/courses">courses</Link>
                   <Link to="/contact">contact</Link>
               </nav>

               <div className="icons">
                   <div onClick={HandleToggleForm} id="account-btn" className="fas fa-user"/>
                   <div id="menu-btn" className="fas fa-bars"/>
               </div>

           </header>
           <AccountForm
           activeClassName={FormClassName}
           HandleToggleForm={HandleToggleForm}
           />
           </>
    );
};

export default Header;
