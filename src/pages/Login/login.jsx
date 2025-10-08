import Navbar from "../../components/Navbar/navbar"
import foto_clular from "../../assets/foto_celular.svg"
import "../Login/login_style.css"
import { Link } from "react-router-dom"
export default function Login(){
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
                            placeholder="User"/>
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" className="input"
                            placeholder="Password"/>
                            <a href="#"
                            id="forgot-password">Esqueceu a senha?</a>
                        </div>
                        <div>
                            <Link to={"/home"}>
                            <input type="submit" className="input"
                            />
                            </Link>
                        </div>
                        
                    </form>
                    <hr />
                    <div id="continue-with">
                        <h3>Continuar com:</h3>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}