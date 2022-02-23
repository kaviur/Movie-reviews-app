import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import "../css/login.css"

const SignUp = () => {

    const {setUser} = useContext(userContext)

    const signUp = (event) => {
        event.preventDefault()
        const {email,password,username} = event.target

        console.log(email.value,password.value,username.value)

        //Datos para el registro: firstName,lastName,birthday,city,email,password
        fetch("https://cinemalis-342015.rj.r.appspot.com/auth/signup",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                useName:username.value,
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            //setUser({logged:true,name:user.data.userName})
        }).catch(error=>setUser({logged:false}))
        
    }


  return (
    <div className="outer mb-5">
        <div className="inner">
            <form onSubmit={signUp}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input type="text" className="form-control" placeholder="username" name="username"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                    </div>

                    <button className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">log in?</a>
                    </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp