import React from 'react'
import '../css/login.css'
function Login() {
  return (
    <>
    <div class="container">
        <div class="row ">
            <div class="col-sm-6 col-md-4 mx-auto">
                <h1 class="text-center login-title my-5 mt-5 ml-5">Login
                </h1>
                <div class="acount-wall mt-5">
                    <img src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/pjoyo.jpg?sz=120"
                        alt="googleuser content" class="profile-img"/>
                    <form class="form-signin mb-5"  method="POST">
                        <input type="email" class="form-control my-2 text-center int" id="form" name="email"
                            placeholder="Email address" title="Please enter email to continue" required/>
                        <input type="password" class="form-control text-center int" id="password"
                            title="Please enter password to continue" name="password" placeholder="Password" required/>
                        <button type="submit" class="btn btn-lg btn-primary btn-block mt-4 mb-5">Sign in</button>
                    </form>
                </div>
                <a href="/Register" class="text-center new-account ml-4">Create New Acccount</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login