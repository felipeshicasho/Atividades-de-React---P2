import React, { useState, useEffect } from 'react';

// Componente Letreiro
function Letreiro() {
    const texto = "CONHEÇA A FATEC";
    const [textoAtual, setTextoAtual] = useState("");
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (indice < texto.length) {
                setTextoAtual(prev => prev + texto[indice]);
                setIndice(prev => prev + 1);
            } else {
                setTimeout(() => {
                    setTextoAtual("");
                    setIndice(0);
                }, 1000);
            }
        }, 200);

        return () => clearInterval(timer);
    }, [indice]);

    return (
        <div style={{
            fontSize: '2rem',
            textAlign: 'center',
            backgroundColor: '#e9ecef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p>{textoAtual}</p>
        </div>
    );
}

function Relogio() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []); 

    return (
        <div style={{ 
            fontSize: '2rem', 
            textAlign: 'center',
            margin: '20px',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px'
        }}>
            <h2>Relógio</h2>
            <p>{hora.toLocaleTimeString()}</p>
        </div>
    );
}

function Atividade01() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Atividade 01</h1>
            <Letreiro />
            <Relogio />
        </div>
    );
}

export default Atividade01;
