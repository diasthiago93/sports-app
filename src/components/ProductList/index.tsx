import * as S from './styles';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Map = dynamic(() => import('components/Map'), { ssr: false });
const data = [
  {
    id: '1',
    title: 'Bicicletas Ergométrica',
    descripiton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ex. Aenean malesuada gravida pulvinar. Sed id ligula in dolor sollicitudin finibus pulvinar eu magna. Etiam porta tincidunt augue in blandit. Suspendisse maximus molestie massa vel feugiat.'
  },
  {
    id: '2',
    title: 'Esteiras Ergométrica',
    descripiton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ex. Aenean malesuada gravida pulvinar. Sed id ligula in dolor sollicitudin finibus pulvinar eu magna. Etiam porta tincidunt augue in blandit. Suspendisse maximus molestie massa vel feugiat.'
  },
  {
    id: '3',
    title: 'Mini Cama Elástica',
    descripiton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ex. Aenean malesuada gravida pulvinar. Sed id ligula in dolor sollicitudin finibus pulvinar eu magna. Etiam porta tincidunt augue in blandit. Suspendisse maximus molestie massa vel feugiat.'
  },
  {
    id: '4',
    title: 'Simuladores de Caminhada',
    descripiton:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu ex. Aenean malesuada gravida pulvinar. Sed id ligula in dolor sollicitudin finibus pulvinar eu magna. Etiam porta tincidunt augue in blandit. Suspendisse maximus molestie massa vel feugiat.'
  }
];

export default function ProductList() {
  return (
    <S.Container>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <figure>
              <Image src={'/img/banner.jpg'} width={200} height={100} />
            </figure>
            <article>
              <h4>{item.title}</h4>
              <p>{item.descripiton}</p>
              <a href="" type="button">
                <button>
                Alugar
                </button>
              </a>
            </article>
          </li>
        ))}
      </ul>
      <Map />
    </S.Container>
  );
}
