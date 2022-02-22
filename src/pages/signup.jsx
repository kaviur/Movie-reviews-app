import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import SignUp from '../components/SignUp'
import "../css/login.css"

export default function Login() {

    const {user,setUser} = useContext(userContext)

    const signIn = (event) => {
        event.preventDefault()
        const {email,password} = event.target

        console.log(email.value,password.value)

        //Datos para el registro: firstName,lastName,birthday,city,email,password
        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/signup",{
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
  return <div className='page'>
      <p>{user.logged?"Bienvenido "+user.name:"Sin sesión"}</p>

      <SignUp />
  </div>
}
