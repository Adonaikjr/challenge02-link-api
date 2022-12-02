import styled from 'styled-components'
import { defaultColors } from '../../theme/defaultColors'

export const ContainerCard = styled.div`
  border: solid transparent;
  background: red;
  height: 16.5rem;
  background-color: ${() => defaultColors.white};
  border-radius: 18px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  p {
    font-size: 15px;
    width: 18rem;
    color: ${() => defaultColors.secondGray};
  }
  h1 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h1,
  p {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export const StyleComponentImage = styled.div`
  border: solid transparent;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${() => defaultColors.primaryTwo};
  margin-top: -2rem;
  margin-left: 1.5rem;
`
