import Link from 'next/link'
import * as S from "./styles";
import {UserCircle} from "@styled-icons/boxicons-regular/"

const Header = () => {
return(
<S.Header>
<img src="" alt="Logomarca da Empresa"/>
<nav>
  <ul>
    <li>
      <Link href="">Home</Link>
    </li>
    <li>
      <Link href="">Sobre</Link>
    </li> 
    <li>
      <Link href="">Contato</Link>
    </li>
  </ul>
</nav>
<div>
  <UserCircle size={32} aria-label="Login"/>
</div>
</S.Header>
)}

export default Header;