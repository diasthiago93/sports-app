import styled from "styled-components";

export const Body = styled.section`

h1{
 color:var(--color-title);
 font-size:(--medium);
}
h4{
  font-size: 18px;
    line-height: 22px;
    max-height: 44px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: rgb(34, 34, 34);
    font-weight: 600;
    white-space: pre-line;
}
`