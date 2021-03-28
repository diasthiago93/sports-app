import * as S from './styles';
import { UserCircle } from '@styled-icons/boxicons-regular/';


const Header = () => {
  return (
    <S.Header>
      <S.Container>
     <img src="" alt=""/>
        <form>
          <input placeholder="Qual sua cidade?" type="text" />
          <button type="submit">Buscar</button>
        </form>
        <div>
          <UserCircle size={32} aria-label="Login" />
        </div>
      </S.Container>
    </S.Header>
  );
};

export default Header;
