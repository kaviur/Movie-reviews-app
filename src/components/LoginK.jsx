import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import {Navigate} from 'react-router-dom';
import "../css/login.css"

const LoginK = () => {

    const {user,setUser} = useContext(userContext)

    if(user.logged){
        return <Navigate to="/"/>
    }

    const signIn = (event) => {
        event.preventDefault()
        const {email,password} = event.target
        //console.log(email.value,password.value)

        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true,name:user.data.firstName})
        }).catch(error=>setUser({logged:false}))
        
    }

  return (
    <div className="outer mt-5 mb-5">
        <div className="inner">
            <form onSubmit={signIn}>
                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="usuario@mail.com" name="email" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Escribe tu password" name="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordar</label>
                    </div>
                </div>

                <button className="btn btn-dark btn-lg btn-block">Entrar</button>
                <p className="forgot-password text-right">
                    Olvidé mi <a href="#">contraseña</a>
                </p>
                <p className="forgot-password text-right">
                    ¿No tienes una cuenta? <a href="signup">Crear mi cuenta</a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default LoginK