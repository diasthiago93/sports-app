import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0 2rem;
  margin: 6rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid var(--ash-gray);
      padding-top: 1rem;
      
      figure {
        margin: 0 1rem;
        width: 250px;
        img{
          border-radius: .25rem;
        }
      }
      article{
        width: 90%;
      }
      & + li {
        margin-top: 1rem;
      }
      h4 {
        font-size: var(--small);
      }
      p{
        font-size: var(--small);
      }
      a {
        text-decoration: none;
        float: right;     
        margin-top: 1rem;
        button {
          font-size: var(--small);
          height: 4rem;
          padding: 0 3rem;
          border-radius: 1.5rem;
          border: 0;
          outline: none;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          background: var(--teal-blue);
          color: var(--beige);
          transition: 0.2s;
          text-decoration: none;
          &:hover {
            filter: brightness(80%);
          }
        }
      }
    }
  }
`;
