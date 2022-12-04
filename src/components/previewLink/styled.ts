import styled from 'styled-components'

export const ContainerPreviewLink = styled.div`
  border: solid transparent ;
  border-radius: 5px;
  padding: 1rem;
  margin: 0rem 5rem 0rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  @media (max-width: 831px){
    flex-wrap: wrap;
    height: 10rem;
   
  }
`
export const ContentPreviewLink = styled.div`
  border: solid transparent;
  width: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 831px){
    flex-wrap: wrap;
    width: 100%;
  }
`
