import styled from 'styled-components'
import { defaultColors } from '../../theme/defaultColors'

export const ContainerFooter = styled.footer`
  border: solid transparent;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  background-color: ${() => defaultColors.secondVeryDarkViolet};
  nav {
    display: flex;
  }
  ul {
    margin: 2rem;
    border: solid transparent;
    width: 10rem;
    list-style: none;
  }
  h4 {
    color: ${() => defaultColors.white};
  }
  li {
    color: ${() => defaultColors.secondGray};
  }
  section {
    padding-top: 2.6rem;
    width: 10rem;
    display: flex;
    justify-content: space-evenly;
    border: solid transparent;
    img {
      height: 25px;
    }
  }
`
