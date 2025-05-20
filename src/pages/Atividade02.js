import React, { useState } from 'react';
import styles from '../css/Atividade02.module.css';

function GrupoPessoa({ label, quantidade, onIncrement, onDecrement, emoji }) {
  return (
    <div className={styles.grupoPessoa}>
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.botoes}>
        <button onClick={onIncrement} className={styles.mais}>+</button>
        <button onClick={onDecrement} className={styles.menos}>-</button>
      </div>
      <div className={styles.label}>{label}</div>
      <input type="text" value={quantidade} readOnly className={styles.input} />
    </div>
  );
}

function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  function resetar() {
    setHomens(0);
    setMulheres(0);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Total</h2>
        <button onClick={resetar} title="Resetar" className={styles.resetButton}>&#x21bb;</button>
      </div>
      <input type="text" value={total} readOnly className={styles.totalInput} />
      <div className={styles.grupos}>
        <GrupoPessoa
          label="Homens"
          quantidade={homens}
          onIncrement={() => setHomens(homens + 1)}
          onDecrement={() => setHomens(homens > 0 ? homens - 1 : 0)}
          emoji="👨"
        />
        <GrupoPessoa
          label="Mulheres"
          quantidade={mulheres}
          onIncrement={() => setMulheres(mulheres + 1)}
          onDecrement={() => setMulheres(mulheres > 0 ? mulheres - 1 : 0)}
          emoji="👩"
        />
      </div>
    </div>
  );
}

export default ContadorPessoas; 