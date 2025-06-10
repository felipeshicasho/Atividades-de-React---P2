import React from 'react';
import FormQuiz from '../components/FormQuiz';
import FormTicket from '../components/FormTicket';
import Accordion from '../components/Accordion';
import Messenger from '../components/Messenger';

function Atividade05() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Atividade 05 - Formulários e Interatividade</h1>
      
      <section>
        <h2>FormQuiz Component</h2>
        <FormQuiz />
      </section>

      <section>
        <h2>FormTicket Component</h2>
        <FormTicket />
      </section>

      <section>
        <h2>Accordion Component</h2>
        <Accordion />
      </section>

      <section>
        <h2>Messenger Component</h2>
        <Messenger />
      </section>
    </div>
  );
}

export default Atividade05; 