import styled from 'styled-components'
import { defaultColors } from '../../theme/defaultColors'

export const ContainerFooter = styled.footer`
  border: solid transparent;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: ${() => defaultColors.secondVeryDarkViolet};
  width: 100%;
  nav {
    display: flex;
    flex-wrap: wrap;
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
