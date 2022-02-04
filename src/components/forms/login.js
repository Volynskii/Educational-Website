import React from 'react';

const Login = () => {
    return (
       <>
           <form className="login-form active" action="">
               <h3>login now</h3>
               <input type="email" placeholder="enter your email" className="box"/>
               <input type="password" placeholder="enter your password" className="box"/>
               <div className="flex">
                   <input type="checkbox" name="" id="remember-me"/>
                   <label htmlFor="remember-me">remember me</label>
                   <a href="#">forgot password?</a>
               </div>
               <input type="submit" value="login now" className="btn"/>
           </form>
           </>
    );
};

export default Login;
