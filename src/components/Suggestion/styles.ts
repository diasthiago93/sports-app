import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
  .list-suggestion {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    a {
      background: var(--green-sheen);
      padding: 5rem 2rem;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: .2s;
      &:hover{
        filter: brightness(80%)
      }
    }
  }
  h1 {
    color: var(--color-title);
    font-size: var(--medium);
    text-align: center;
    margin: 4rem 0;
  }
  h4 {
    font-size: var(--small);
    font-weight: 700;
    line-height: 24px;
    color: var(--beige);
    text-transform: uppercase;
    text-align: center;
  }

`;
