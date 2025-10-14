import Navbar from "../../components/Navbar/navbar"
import foto_clular from "../../assets/mao_celular.svg"
import "../Login/login_style.css"
import { useNavigate } from "react-router-dom"
import login from "../../service/userService.js"

export default function Login(){
    const navigate = useNavigate();
    async function logar(id_user, id_password){
        const user = document.getElementById(`${id_user}`)
        const password = document.getElementById(`${id_password}`)
        if(user.value == "" || password.value == ""){
            user.style.border = 'solid red 2px'
            password.style.border = 'solid red 2px'
            setInterval(()=>{
                user.style.border = 'solid lightgray 1px'
                password.style.border = 'solid lightgray 1px'
            }, 3000)

        }else{
            if (login(user.value, password.value)){
                navigate("/home")
            }
        }
    }

    return (
        <>
            <Navbar/>
            <div id="body">
                <div id="image">
                    <img src={foto_clular} alt="" />
                </div>
                <div id="register">
                    <h1>LOG<span>IN</span></h1>
                    <form action="">
                        <div>
                            <p>User</p>
                            <input type="text" className="input"
                            placeholder="User"
                            id="user"/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" 
                            id="password"
                            className="input"
                            placeholder="Password"/>
                            <a href="#"
                            id="forgot-password">Esqueceu a senha?</a>
                        </div>
                        <div>
                            <input 
                            type="submit" 
                            className="input"
                            onClick={(event) =>{
                                event.preventDefault()
                                logar("user", "password")
                            }}
                            />
                        </div>
                    </form>
                    <hr />
                    <div id="continue-with">
                        <h3>Continuar com:</h3>
                        {/* <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}