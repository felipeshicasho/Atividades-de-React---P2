import React  from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Atividades</h1>
            <nav>
                <ul>
                    <li><Link to="/atividade01">Atividade 01 - Jogo da Velha</Link></li>
                    <li><Link to="/atividade02">Atividade 02 - Jogo da Cobra</Link></li>
                    <li><Link to="/atividade03">Atividade 03 - Analisador de Imagens</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;