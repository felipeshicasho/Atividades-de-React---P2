import Gallery, { Profile, Avatar, PeopleList, ChemistsList, PackingList, Item, FragmentExample } from '../components/Gallery';

export default function Aula10() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Atividade 03 - Exemplos de Componentes React</h1>
      <Gallery />
      <hr />
      <h2>Profile (exportação nomeada)</h2>
      <Profile />
      <hr />
      <h2>Avatar (com props)</h2>
      <Avatar person={{ name: 'Lin Lanying', imageUrl: 'https://i.imgur.com/MK3eW3As.jpg' }} size={120} />
      <hr />
      <h2>Lista de Pessoas</h2>
      <PeopleList />
      <hr />
      <h2>Lista de Químicos</h2>
      <ChemistsList />
      <hr />
      <h2>Packing List (Renderização condicional)</h2>
      <PackingList />
      <hr />
      <h2>Fragment Example</h2>
      <FragmentExample />
    </div>
  );
}

