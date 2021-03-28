import * as S from './styles';

const Suggestion = () => {
  const data = [
    {
      id: '1',
      title: 'Bicicletas Ergométrica'
    },
    {
      id: '2',
      title: 'Esteiras Ergométrica'
    },
    {
      id: '3',
      title: 'Mini Cama Elástica'
    },
    {
      id: '4',
      title: 'Simuladores de Caminhada'
    }
  ];

  return (
    <S.Container>
      <h1>Alugue Equipamentos esportivos no conforto da sua casa</h1>
      <div className="list-suggestion">
        {data.map((item) => (
          <a href="" key={item.id}>
            <h4>{item.title}</h4>
          </a>
        ))}
      </div>
    </S.Container>
  );
};

export default Suggestion;
