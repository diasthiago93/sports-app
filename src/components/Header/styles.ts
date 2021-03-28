import styled from 'styled-components';

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  width: 100%;

  z-index: 100;
  background: var(--eerie-black); 
  &:after {
    background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  form{
    input{
    height: 4rem;
    padding: 0 1rem;
    border-radius: 1.5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 0;
    outline: none;
    width: 400px;
    max-width: 100%;    
    color:var(--eerie-black);
    font-size: var(--small);
    &::placeholder{
      color:var(--ash-gray);    
    }
    }
    button{
    font-size: var(--small);
    height: 4rem;
    padding: 0 3rem;
    border-radius: 1.5rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 0;
    outline: none;
    text-transform:uppercase;
    font-weight: 600;
    cursor: pointer;
    background: var(--teal-blue);
    color: var(--beige);
    }
  }
  svg{
   color: var(--beige);
  }
`;

export const Container = styled.div`
width: 100%;
max-width: 1200px;
padding: 0 2rem;
margin: 0 auto;
display: flex;
justify-content: space-between;
height: 10rem;  
align-items: center;
`