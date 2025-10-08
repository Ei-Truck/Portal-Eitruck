import "../Sidebar/sidebar.css"
import icon1 from "../../assets/icons/icon_1.svg"
import icon2 from "../../assets/icons/icon_2.svg"
import icon3 from "../../assets/icons/icon_3.svg"
import icon4 from "../../assets/icons/icon_4.svg"
import logouut from "../../assets/icons/logout.svg"
import {Link, Route} from "react-router-dom"

export default function Sidebar(){
    return(
     <aside>
        <div id="icons">
            <Link to="/teste">
            <div className="icons-div">
                <img src={icon1} className="icon"/>
                    <h3 className="text">Gráficos#1</h3>
            </div>
            </Link>
            
            <Link>
            <div className="icons-div">
                <img src={icon2} className="icon"/>
                <h3 className="text">Gráficos#2</h3>            
            </div>
            </Link>
            <Link>
            <div className="icons-div">
                <img src={icon3} className="icon"/>
                <h3 className="text">Gráficos#3</h3>
            </div>
            </Link>
            <Link>
            <div className="icons-div">
                <img src={icon4} className="icon"/>
                <h3 className="text">Gráficos#4</h3>
            </div>
            </Link>
        </div>
        <Link>
        <div>
            <img id="bt-logout" src={logouut}/>
            <h3 className="text">Sair</h3>
        </div>
        </Link>
     </aside>   
    )
}