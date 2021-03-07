import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  background: var(--background);
  top: 0px;
  &:after {
    background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      a {
        font-size: var(--small);
        line-height: 20px;
        font-weight: 400;
        padding: 10px 16px;
        color: var(--white);
        text-decoration: none;
        &:hover,&:focus{
           outline: none;
           color: var(--white);
        }
      }
    }
  } 
  svg{
   color: var(--white);
  }
`;
