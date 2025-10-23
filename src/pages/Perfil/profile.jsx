import Navbar from "../../components/Navbar/navbar"
import Sidebar from "../../components/Sidebar/sidebar"
import "../Perfil/profile_style.css"
import user from "../../assets/icone_perfil.svg"
export default function Profile(){
    return(
        <>
        <Navbar></Navbar>
        <section>
            <Sidebar></Sidebar>
            <div id="general-profile-info">
                <div id="profile-photo">
                    <div id="profile-image-name">
                        <img src={user} alt="" />
                        <div id="name-position">
                            <h3>João Silva</h3>
                            <p>Analista - Bovino</p>
                            <br />
                        </div>
                    </div>
                    <button></button>
                </div>
                <div id="profile-info">
                    <div id="infos">
                        <div id="since">
                            <h3>Desde: 07/08/2008</h3>
                        </div>
                        <form action="" 
                            id="infos-form">
                            <label htmlFor="">Nome</label><input type="text"  
                            defaultValue={"João Vitor da Silva Camargo "}/>
                            <label htmlFor="">E-mail</label><input type="text" 
                            defaultValue={"Joao.silva@empresa.com"}/>
                            <div id="separator">
                                <div className="separator-div">
                                    <label htmlFor="">Cargo</label><input type="text" 
                                defaultValue={"Analista"}/>
                                </div>
                                <div
                                className="separator-div">
                                    <label htmlFor="">Segmento</label><input type="text" 
                                defaultValue={"Bovino"}/>
                                </div>
                            </div>
                            <button>Alterar Perfil</button>
                        </form>
                    </div>
                    <div id="transaction-console">
                        <h1>Console de transações</h1>
                        <div>
                            {/* provavelmente usarei um componente para fazer a listagem aqui, mas no momento seram dados mockados */}
                            <div className="trasaction-div">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}