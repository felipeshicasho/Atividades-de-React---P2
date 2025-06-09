import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            padding: '20px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#333', marginBottom: '30px' }}>Atividades</h1>
            <nav>
                <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    <li>
                        <Link to="/atividade01" style={{
                            display: 'block',
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#333',
                            fontSize: '1.2rem',
                            transition: 'background-color 0.3s'
                        }}>
                            Atividade 01 - Relógio Digital / Letreiro
                        </Link>
                    </li>
                    <li>
                        <Link to="/atividade02" style={{
                            display: 'block',
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#333',
                            fontSize: '1.2rem',
                            transition: 'background-color 0.3s'
                        }}>
                            Atividade 02 - Contador de Pessoas
                        </Link>
                    </li>
                    <li>
                        <Link to="/atividade03" style={{
                            display: 'block',
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#333',
                            fontSize: '1.2rem',
                            transition: 'background-color 0.3s'
                        }}>
                            Atividade 03 - Exemplos de Componentes React
                        </Link>
                    </li>
                    <li>
                        <Link to="/atividade04" style={{
                            display: 'block',
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: '#333',
                            fontSize: '1.2rem',
                            transition: 'background-color 0.3s'
                        }}>
                            Atividade 04 - Gerenciamento de Estado React
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;