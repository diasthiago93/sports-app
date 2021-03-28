import styled from "styled-components";

export const Container = styled.section`
 width: 100%;
  padding: 8rem 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  h2{
    color: var(--color-title);
    font-size: var(--medium);
    margin: 2rem 0;
  }
  p{
    font-size: var(--small);
    line-height: 20px;
  }
`