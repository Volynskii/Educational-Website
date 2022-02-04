import React from 'react';

const Register = () => {
    return (
       <>
           <form className="register-form active" action="">
               <h3>register now</h3>
               <input type="email" placeholder="enter your email" className="box"/>
               <input type="password" placeholder="enter your password" className="box"/>
               <input type="password" placeholder="confirm your password" className="box"/>
               <input type="submit" value="register now" className="btn"/>
           </form>
           </>
    );
};

export default Register;
