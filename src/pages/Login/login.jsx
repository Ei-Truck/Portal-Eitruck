import Navbar from "../../components/Navbar/navbar"
import foto_clular from "../../assets/mao_celular.svg"
import "../Login/login_style.css"
import { useNavigate } from "react-router-dom"
import { login } from "../../service/userService.js"

export default function Login() {
    const navigate = useNavigate();

    async function logar(id_user, id_password) {
        const user = document.getElementById(`${id_user}`)
        const password = document.getElementById(`${id_password}`)

        const emailRegex = /^[a-zA-Z0-9._%+-]+@empresa$/;

        if (user.value === "" || password.value === "") {
            user.style.border = 'solid red 2px'
            password.style.border = 'solid red 2px'
            setTimeout(() => {
                user.style.border = 'solid lightgray 1px'
                password.style.border = 'solid lightgray 1px'
            }, 3000)
        } 
        else if (!emailRegex.test(user.value)) {
            user.style.border = 'solid red 2px';
            alert("Email inválido! O email deve terminar com '@empresa'.");
            setTimeout(() => {
                user.style.border = 'solid lightgray 1px';
            }, 3000);
        }
        else {
            const success = await login(user.value, password.value);
            if (success) {
                navigate("/home");
            } else {
                alert("Usuário ou senha incorretos");
            }
        }
    }

    return (
        <>
            <Navbar />
            <div id="body">
                <div id="image">
                    <img src={foto_clular} alt="" />
                </div>
                <div id="register">
                    <h1>LOG<span>IN</span></h1>
                    <form action="">
                        <div>
                            <p>User</p>
                            <input
                                type="text"
                                className="input"
                                placeholder="User"
                                id="user"
                            />
                        </div>
                        <div>
                            <p>Password</p>
                            <input
                                type="password"
                                id="password"
                                className="input"
                                placeholder="Password"
                            />
                            <a href="#" id="forgot-password">Esqueceu a senha?</a>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="input"
                                onClick={(event) => {
                                    event.preventDefault()
                                    logar("user", "password")
                                }}
                            />
                        </div>
                    </form>
                    <hr />
                </div>
            </div>
        </>
    )
}
