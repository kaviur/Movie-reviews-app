import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom';
import { userContext } from '../context/UserContext'
import "../css/login.css"

const SignUp = () => {

    const {setUser} = useContext(userContext)

    const signUp = (event) => {
        event.preventDefault()
        const {email,password,firstName,lastName,birthday,city} = event.target

        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/signup",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName:firstName.value,
                lastName:lastName.value,
                birthday:birthday.value,
                city:city.value,
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user.success)
            if(user.success === true){
                return <Navigate to="/login"/>
            }

            //setUser({logged:true,name:user.data.userName})
        }).catch(error=>setUser({logged:false}))
        
    }


  return (
    <div className="outer mb-5">
        <div className="inner">
            <form onSubmit={signUp}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" name="firstName"/>
                    </div>

                    <div className="form-group">
                        <label>Apellido</label>
                        <input type="text" className="form-control" placeholder="Apellido" name="lastName"/>
                    </div>

                    <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <input type="date" className="form-control" name="birthday"/>
                    </div>

                    <div className="form-group">
                        <label>Ciudad</label>
                        <input type="text" className="form-control" placeholder="Ciudad" name="city"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                    </div>

                    <button className="btn btn-dark btn-lg btn-block">Registrarse</button>
                    <p className="forgot-password text-right">
                        ¿Ya tienes una cuenta? <a href="/login">Entrar</a>
                    </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp