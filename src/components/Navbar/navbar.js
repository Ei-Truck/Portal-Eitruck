import "../Navbar/navbar.css"
import logo_eitruck from "../../assets/logo_eitruck.svg"
import icone_perfil from "../../assets/icone_perfil.png"
export default function Navbar(){
    return(
        <nav>
            <div id="first-section" class="division">
                <img src={logo_eitruck} id="logo"/>

            </div>
            <div id="second-section" class="division">
                <img src={icone_perfil} id="icone_perfil"/>
            </div>
        </nav>
    )
}   