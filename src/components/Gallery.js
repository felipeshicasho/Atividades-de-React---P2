import React, { useState } from 'react';
import { sculptureList } from './data';

// 1.1.2 Definindo um componente
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      width={100}
      height={100}
      style={{ borderRadius: '50%' }}
    />
  );
}

// 1.5.2 Passando props para um componente
function Avatar({ person, size = 100 }) {
  return (
    <img
      src={person.imageUrl}
      alt={person.name}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
}

// 1.7.1 Renderizando dados de arrays
const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    imageUrl: 'https://i.imgur.com/MK3eW3As.jpg',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    imageUrl: 'https://i.imgur.com/1bX5QH6.jpg',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    imageUrl: 'https://i.imgur.com/2hM8pHY.jpg',
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    imageUrl: 'https://i.imgur.com/IOjWm71.jpg',
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    imageUrl: 'https://i.imgur.com/lICfvbD.jpg',
  },
];

// 1.7.2 Filtrando matrizes de itens
const chemists = people.filter(person => person.profession === 'chemist');

// 1.7.1 Renderizando lista
function PeopleList() {
  return (
    <ul>
      {people.map(person => (
        <li key={person.id}>
          <Avatar person={person} size={80} />
          <p>{person.name} ({person.profession})</p>
        </li>
      ))}
    </ul>
  );
}

// 1.7.2 Lista filtrada
function ChemistsList() {
  return (
    <ul>
      {chemists.map(person => (
        <li key={person.id}>
          <Avatar person={person} size={80} />
          <p>{person.name} ({person.profession})</p>
        </li>
      ))}
    </ul>
  );
}

// 1.6 Renderização condicional
function PackingList() {
  return (
    <section>
      <h2>Packing List</h2>
      <ul>
        <Item isPacked={true} name="Toothbrush" />
        <Item isPacked={false} name="Towel" />
        <Item isPacked={true} name="Notebook" />
      </ul>
    </section>
  );
}

function Item({ isPacked, name }) {
  return (
    <li>
      {name} {isPacked && '✔'}
    </li>
  );
}

// 1.3.3 Fragmento
function FragmentExample() {
  return (
    <>
      <h2>Fragment Example</h2>
      <p>Este conteúdo está dentro de um fragmento.</p>
    </>
  );
}

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <section>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </section>
  );
}

// Exportação nomeada
export { Profile, Avatar, PeopleList, ChemistsList, PackingList, Item, FragmentExample };
export default Gallery;