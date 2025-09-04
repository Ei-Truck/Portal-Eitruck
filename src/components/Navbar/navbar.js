import "../Navbar/navbar.css"
import logo_eitruck from "../../assets/logo_eitruck.svg"
import icone_perfil from "../../assets/icone_perfil.png"
export default function Navbar(){
    return(
        <nav>
            <img src={logo_eitruck} id="logo"/>
            <img src={icone_perfil} id="icone_perfil"/>
        </nav>
    )
}