import styled from 'styled-components'

export const ContainerButtonVisible = styled.button`
  border: solid transparent;
  width: 5rem;
  height: 2.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryOne};
  transition: 1s;
  :hover {
    transition: 1s;
    width: 8rem;
  }
`
